import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [CoursesPageComponent, CourseItemComponent,
    LoadMoreComponent, SearchCourseComponent, AddCourseComponent,
    BreadcrumbsComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
