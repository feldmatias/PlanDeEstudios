import { Injectable } from '@angular/core';
import { Career } from '../models/Career';
import jsonData  from '../../assets/materiasInformatica.json';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  career: Career;

  constructor() { 
    this.career = new Career(jsonData);
  }

  getCareer(){
    return this.career;
  }

  getAllSubjects(){
    return this.career.subjects;
  }

  getRequiredSubjects(){
    return this.career.requiredSubjects;
  }

  getOptionalSubjects(){
    return this.career.optionalSubjects;
  }
}
