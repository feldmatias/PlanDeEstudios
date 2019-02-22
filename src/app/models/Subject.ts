import { StorageService } from '../services/storage.service';
import { Career } from './Career';

const requiredSubjectType = 'required';
const optionalSubjectType = 'optional';
const orientationSubjectType = 'orientation';
const subjectTypeSeparator = '-';

export class Subject {

  code: number;
  name: string;
  credits: number;
  type: string;
  correlatives: Array<number>;
  credits_needed: number;

  note: number = 0;
  correlativeSubjects: Array<Subject> = [];
  career: Career;

  constructor(data: any){
    this.code = data.code;
    this.name = data.name;
    this.credits = data.credits;
    this.type = data.type;
    this.correlatives = data.correlatives;
    this.credits_needed = data.credits_needed;

    this.initNote();
  }

  isRequired(selectedOrientation: string){
    var [type, orientation] = this.type.split(subjectTypeSeparator);

    switch (type) {
      case requiredSubjectType:
        return true;

      case optionalSubjectType:
        return false;

      case orientationSubjectType:
        return orientation == selectedOrientation;
      
      default:
        return false
    }
  }

  setCorrelative(correlative: Subject){
    this.correlativeSubjects.push(correlative);
  }

  private async initNote(){
    this.note = await StorageService.instance.getNumber(this.code.toString(), 0);
  }

  setNote(note: number){
    this.note = note;
    StorageService.instance.setValue(this.code.toString(), note);
  }

  isApproved(){
    return this.note >= 4;
  }

  isAvailable(){
    return this.correlativeSubjects.every(s => s.isApproved()) && this.creditsNeeded() == 0;
  }

  creditsNeeded(){
    var credits = this.credits_needed - this.career.totalCredits();
    return credits > 0 ? credits : 0;
  }

}