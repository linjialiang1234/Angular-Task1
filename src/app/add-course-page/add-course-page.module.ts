import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { AddCourseAuthorsComponent} from './add-course-authors/add-course-authors.component';
import { AddCourseDateComponent} from './add-course-date/add-course-date.component';
import { AddCourseDurationComponent} from './add-course-duration/add-course-duration.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [AddCoursePageComponent, AddCourseAuthorsComponent, AddCourseDateComponent, AddCourseDurationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule { }
