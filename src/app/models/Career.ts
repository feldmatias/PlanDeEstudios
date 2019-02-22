import { StorageService } from '../services/storage.service';
import { Subject } from './Subject';

const orientationStorageKey = 'orientation';
const endSubjectStorageKey = 'endSubject';

const thesis = 'Tesis';
const professionalWork = 'Trabajo Profesional';

export class Career {

  name: string;
  required_credits: number;
  optional_credits: number;
  orientations: Array<string>;
  subjects: Array<Subject> = [];

  requiredSubjects: Array<Subject> = [];
  optionalSubjects: Array<Subject> = [];
  selectedOrientation: string = null;
  selectedEndSubject: string = null;

  thesisSubject: Subject;
  professionalWorkSubject: Subject;


  constructor(data: any){
    this.name = data.name;
    this.required_credits = data.required_credits;
    this.optional_credits = data.optional_credits;
    this.orientations = data.orientations;
    data.subjects.forEach(function(subject){
      this.subjects.push(new Subject(subject));
    }.bind(this));

    this.initializeSubjects();
    this.initOrientation();
    this.initEndSubject();

  }

  private initializeSubjects(){

    this.subjects.forEach(function (subject){
      subject.career = this;

      subject.correlatives.forEach(function (code){
        var correlative = this.subjects.find(s => s.code == code);
        subject.setCorrelative(correlative);
      }.bind(this));

      if (subject.name == thesis){
        this.thesisSubject = subject;
      } else if (subject.name == professionalWork){
        this.professionalWorkSubject = subject;
      }

    }.bind(this));

    this.initializeSubjectArrays();
  }

  private initializeSubjectArrays(){
    this.requiredSubjects = [];
    this.optionalSubjects = [];

    this.subjects.forEach(function (subject){
      if (subject.isRequired(this.selectedOrientation, this.selectedEndSubject)){
        this.requiredSubjects.push(subject);
      } else if (!subject.isEndSubject()) {
        this.optionalSubjects.push(subject);
      }
    }.bind(this));

    this.optionalSubjects = this.optionalSubjects.sort((a, b) => a.code - b.code);
  }

  totalRequiredCreditsEarned(){
    return this.requiredSubjects.reduce(((result: number, subject) => {return subject.isApproved() ? result + subject.credits : result}), 0);
  }

  totalOptionalCreditsEarned(){
    return this.optionalSubjects.reduce(((result: number, subject) => {return subject.isApproved() ? result + subject.credits : result}), 0);
  }

  totalCredits(){
    return this.totalRequiredCreditsEarned() + this.totalOptionalCreditsEarned();
  }

  requiredCredits(){
    return this.required_credits + (this.selectedEndSubject == thesis ? this.thesisSubject.credits : this.professionalWorkSubject.credits);
  }

  optionalCredits(){
    return this.optional_credits + (this.selectedEndSubject == thesis ? 0 : this.thesisSubject.credits - this.professionalWorkSubject.credits);
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
    this.selectedOrientation = await StorageService.instance.getString(orientationStorageKey, this.orientations[0]);
    this.initializeSubjectArrays();
  }

  changeEndSubject(subject: string){
    this.selectedEndSubject = subject;
    this.initializeSubjectArrays();
    StorageService.instance.setValue(endSubjectStorageKey, subject);
  }

  private async initEndSubject(){
    this.selectedEndSubject = await StorageService.instance.getString(endSubjectStorageKey, thesis);
    this.initializeSubjectArrays();
  }

}