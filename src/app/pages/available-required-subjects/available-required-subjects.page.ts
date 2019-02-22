import { Component } from '@angular/core';
import { Subject } from '../../models/Subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-available-required-subjects',
  templateUrl: './available-required-subjects.page.html',
  styleUrls: ['./available-required-subjects.page.scss'],
})
export class AvailableRequiredSubjectsPage {

  subjects: Array<Subject>;

  constructor(private subjectsService: SubjectsService) { }

  ionViewDidEnter() {
    this.subjects = this.subjectsService.getRequiredSubjects().filter(s => s.isAvailable() && !s.isApproved());
  }

}
