import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';

@NgModule({
    declarations: [
      SubjectComponent,
      SubjectsListComponent
    ],
    imports: [
      CommonModule, 
      IonicModule,
      RouterModule
    ],
    exports: [
      SubjectComponent,
      SubjectsListComponent
    ]
})

export class ComponentsModule {}
