import { Component } from '@angular/core';
import { Career } from '../models/Career';
import { SubjectsService } from '../services/subjects.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  career: Career;

  constructor(private subjectsService: SubjectsService, private platform: Platform) { }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.career = this.subjectsService.getCareer(); 
    }); 
  }

  orientationChanged(orientation: string){
    this.career.changeOrientation(orientation);
  }

  endSubjectChanged(subject: string){
    this.career.changeEndSubject(subject);
  }

}
