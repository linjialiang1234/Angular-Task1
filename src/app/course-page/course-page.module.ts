import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { CoursePageItemComponent } from './course-page-item/course-page-item.component';
import { LoadHomeComponent } from './load-home/load-home.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursePageHeaderComponent } from './course-page-header/course-page-header.component';

@NgModule({
  declarations: [CoursePageComponent, CoursePageItemComponent,
    LoadHomeComponent, SearchCourseComponent, AddCourseComponent,
    CoursePageHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [CoursePageComponent]
})
export class CoursePageModule { }
