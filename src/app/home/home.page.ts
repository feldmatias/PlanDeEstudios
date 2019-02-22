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
  selectedOrientation: string;

  constructor(private subjectsService: SubjectsService) { }

  ionViewDidEnter() {
    this.career = this.subjectsService.getCareer();
    this.selectedOrientation = this.career.selectedOrientation;
  }

  orientationChanged(){
    this.career.changeOrientation(this.selectedOrientation);
  }

}
