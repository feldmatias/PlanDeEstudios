import { Subject } from './Subject';

export class Career {

  name: string;
  required_credits: number;
  optional_credits: number;
  orientations: Array<string>;
  subjects: Array<Subject> = [];

  requiredSubjects: Array<Subject> = [];
  optionalSubjects: Array<Subject> = [];


  constructor(data: any){
    this.name = data.name;
    this.required_credits = data.required_credits;
    this.optional_credits = data.optional_credits;
    this.orientations = data.orientations;
    data.subjects.forEach(function(subject){
      this.subjects.push(new Subject(subject));
    }.bind(this));

    this.initializeSubjects();

  }

  private initializeSubjects(){
    var selectedOrientation = this.orientations[0]; //TODO change this

    this.subjects.forEach(function (subject){

      subject.correlatives.forEach(function (code){
        var correlative = this.subjects.find(s => s.code == code);
        subject.setCorrelative(correlative);
      }.bind(this));

      if (subject.isRequired(selectedOrientation)){
        this.requiredSubjects.push(subject);
      } else {
        this.optionalSubjects.push(subject);
      }
    }.bind(this));
  }

}