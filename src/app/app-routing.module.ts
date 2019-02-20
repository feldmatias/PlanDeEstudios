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
  { path: 'set-subject-note/:code', loadChildren: './pages/set-subject-note/set-subject-note.module#SetSubjectNotePageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
