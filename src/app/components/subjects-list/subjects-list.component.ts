import { Component, Input } from '@angular/core';
import { Subject } from '../../models/Subject';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss'],
})
export class SubjectsListComponent {

  @Input() subjects : Array<Subject>;

  private selectedSubject : number = 0;

  selectSubject(code: number){
    this.selectedSubject = this.selectedSubject == code ? 0 : code;
  }

}
