import { StorageService } from '../services/storage.service';

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

  constructor(data: any){
    this.code = data.code;
    this.name = data.name;
    this.credits = data.credits;
    this.type = data.type;
    this.correlatives = data.correlatives;
    this.credits_needed = data.credits_needed;

    StorageService.instance.getNumber(this.code.toString(), 0, this.initNote.bind(this));
  }

  isRequired(selectedOrientation: string){
    var completeType = this.type.split(subjectTypeSeparator);
    var type = completeType[0];

    switch (type) {
      case requiredSubjectType:
        return true;

      case optionalSubjectType:
        return false;

      case orientationSubjectType:
        var orientation = completeType[1];
        return orientation == selectedOrientation;
      
      default:
        return false
    }
  }

  setCorrelative(correlative: Subject){
    this.correlativeSubjects.push(correlative);
  }

  initNote(note: number){
    this.note = note;
  }

  isApproved(){
    return this.note >= 4;
  }

  isAvailable(){
    this.correlativeSubjects.forEach(function(correlative){
      if (!correlative.isApproved()){
        return false;
      }
    });

    return true;
  }

}