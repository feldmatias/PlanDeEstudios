import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetSubjectNotePage } from './set-subject-note.page';

const routes: Routes = [
  {
    path: '',
    component: SetSubjectNotePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetSubjectNotePage]
})
export class SetSubjectNotePageModule {}
