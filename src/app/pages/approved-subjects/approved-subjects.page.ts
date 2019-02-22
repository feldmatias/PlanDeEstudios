import { Component } from '@angular/core';
import { Subject } from '../../models/Subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-approved-subjects',
  templateUrl: './approved-subjects.page.html',
  styleUrls: ['./approved-subjects.page.scss'],
})
export class ApprovedSubjectsPage {

  subjects: Array<Subject>;

  constructor(private subjectsService: SubjectsService) { }

  ionViewDidEnter() {
    this.subjects = this.subjectsService.getAllSubjects().filter(s => s.isApproved());
  }

}
