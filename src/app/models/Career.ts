import { StorageService } from '../services/storage.service';
import { Subject } from './Subject';

const orientationStorageKey = 'orientation';

export class Career {

  name: string;
  required_credits: number;
  optional_credits: number;
  orientations: Array<string>;
  subjects: Array<Subject> = [];

  requiredSubjects: Array<Subject> = [];
  optionalSubjects: Array<Subject> = [];
  selectedOrientation: string;


  constructor(data: any){
    this.name = data.name;
    this.required_credits = data.required_credits;
    this.optional_credits = data.optional_credits;
    this.orientations = data.orientations;
    data.subjects.forEach(function(subject){
      this.subjects.push(new Subject(subject));
    }.bind(this));

    this.selectedOrientation = this.orientations[0];
    this.initOrientation();
    this.initializeSubjects();

  }

  private initializeSubjects(){

    this.subjects.forEach(function (subject){
      subject.career = this;

      subject.correlatives.forEach(function (code){
        var correlative = this.subjects.find(s => s.code == code);
        subject.setCorrelative(correlative);
      }.bind(this));
    }.bind(this));

    this.initializeSubjectArrays();
  }

  private initializeSubjectArrays(){
    this.requiredSubjects = [];
    this.optionalSubjects = [];

    this.subjects.forEach(function (subject){
      if (subject.isRequired(this.selectedOrientation)){
        this.requiredSubjects.push(subject);
      } else {
        this.optionalSubjects.push(subject);
      }
    }.bind(this));
  }

  totalRequiredCredits(){
    return this.requiredSubjects.reduce(((result: number, subject) => {return subject.isApproved() ? result + subject.credits : result}), 0);
  }

  totalOptionalCredits(){
    return this.optionalSubjects.reduce(((result: number, subject) => {return subject.isApproved() ? result + subject.credits : result}), 0);
  }

  totalCredits(){
    return this.totalRequiredCredits() + this.totalOptionalCredits();
  }

  getAverage(){
    var total = 0;
    var count = 0;
    this.subjects.forEach(function(subject){
      if (subject.isApproved()){
        total += subject.note;
        count ++;
      }
    });

    return count > 0 ? total / count : 0;
  }

  changeOrientation(orientation: string){
    this.selectedOrientation = orientation;
    this.initializeSubjectArrays();
    StorageService.instance.setValue(orientationStorageKey, orientation);
  }

  private async initOrientation(){
    this.selectedOrientation = await StorageService.instance.getString(orientationStorageKey, this.selectedOrientation);
    this.initializeSubjectArrays();
  }

}