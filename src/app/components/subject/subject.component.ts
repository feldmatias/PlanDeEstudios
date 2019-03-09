import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../../models/Subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {

  @Input() subject : Subject;
  @Input() selected : boolean;

  @Output() clicked : EventEmitter<number> = new EventEmitter<number>();

  subjectClicked(){
    let code = this.subject.code;
    this.clicked.emit(code);
  }

}
