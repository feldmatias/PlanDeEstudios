import { Component } from '@angular/core';
import { Career } from '../models/Career';
import { SubjectsService } from '../services/subjects.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  career: Career;

  constructor(private subjectsService: SubjectsService) { }

  ionViewDidEnter() {
    this.career = this.subjectsService.getCareer();  }

  orientationChanged(orientation: string){
    this.career.changeOrientation(orientation);
  }

  endSubjectChanged(subject: string){
    this.career.changeEndSubject(subject);
  }

}
