import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [EditCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EditCourseModule { }
