import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../../models/Subject';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-set-subject-note',
  templateUrl: './set-subject-note.page.html',
  styleUrls: ['./set-subject-note.page.scss'],
})
export class SetSubjectNotePage implements OnInit {

  subject: Subject;
  note: number;

  constructor(private subjectsService: SubjectsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var code = Number(this.activatedRoute.snapshot.paramMap.get('code'));
    this.subject = this.subjectsService.getAllSubjects().find(s => s.code == code);

    if (this.subject.note > 0){
      this.note = this.subject.note;
    }
  }

}
