import { Component } from '@angular/core';
import { Subject } from '../../models/Subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-available-optional-subjects',
  templateUrl: './available-optional-subjects.page.html',
  styleUrls: ['./available-optional-subjects.page.scss'],
})
export class AvailableOptionalSubjectsPage {

  subjects: Array<Subject>;

  constructor(private subjectsService: SubjectsService) { }

  ionViewDidEnter() {
    this.subjects = this.subjectsService.getOptionalSubjects().filter(s => s.isAvailable() && !s.isApproved());
  }

}
