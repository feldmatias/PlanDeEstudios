import { Component } from '@angular/core';
import { Subject } from '../../models/Subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-blocked-subjects',
  templateUrl: './blocked-subjects.page.html',
  styleUrls: ['./blocked-subjects.page.scss'],
})
export class BlockedSubjectsPage {

  subjects: Array<Subject>;
  selectedSubjectCode: number;

  constructor(private subjectsService: SubjectsService) { }

  ionViewDidEnter() {
    this.subjects = this.subjectsService.getRequiredSubjects().filter(s => !s.isAvailable() && !s.isApproved());
  }

  selectSubject(code: number){
    this.selectedSubjectCode = this.selectedSubjectCode == code ? 0 : code;
  }

}
