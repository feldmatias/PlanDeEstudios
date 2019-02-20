import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/Subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-available-required-subjects',
  templateUrl: './available-required-subjects.page.html',
  styleUrls: ['./available-required-subjects.page.scss'],
})
export class AvailableRequiredSubjectsPage implements OnInit {

  subjects: Array<Subject>;

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit() {
    this.subjects = this.subjectsService.getRequiredSubjects().filter(s => s.isAvailable() && !s.isApproved());
  }

}
