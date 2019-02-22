import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApprovedSubjectsPage } from './approved-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedSubjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApprovedSubjectsPage]
})
export class ApprovedSubjectsPageModule {}
