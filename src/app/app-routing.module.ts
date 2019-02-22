import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'available-required-subjects', 
    loadChildren: './pages/available-required-subjects/available-required-subjects.module#AvailableRequiredSubjectsPageModule' 
  },
  { path: 'set-subject-note/:code', loadChildren: './pages/set-subject-note/set-subject-note.module#SetSubjectNotePageModule'},
  { path: 'available-optional-subjects', loadChildren: './pages/available-optional-subjects/available-optional-subjects.module#AvailableOptionalSubjectsPageModule' },
  { path: 'approved-subjects', loadChildren: './pages/approved-subjects/approved-subjects.module#ApprovedSubjectsPageModule' },
  { path: 'blocked-subjects', loadChildren: './pages/blocked-subjects/blocked-subjects.module#BlockedSubjectsPageModule' },
  { path: 'blocked-optional-subjects', loadChildren: './pages/blocked-optional-subjects/blocked-optional-subjects.module#BlockedOptionalSubjectsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
