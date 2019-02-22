import { Component } from '@angular/core';
import { Subject } from '../../models/Subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-blocked-optional-subjects',
  templateUrl: './blocked-optional-subjects.page.html',
  styleUrls: ['./blocked-optional-subjects.page.scss'],
})
export class BlockedOptionalSubjectsPage {

  subjects: Array<Subject>;
  selectedSubjectCode: number;

  constructor(private subjectsService: SubjectsService) { }

  ionViewDidEnter() {
    this.subjects = this.subjectsService.getOptionalSubjects().filter(s => !s.isAvailable() && !s.isApproved());
  }

  selectSubject(code: number){
    this.selectedSubjectCode = this.selectedSubjectCode == code ? 0 : code;
  }

}
