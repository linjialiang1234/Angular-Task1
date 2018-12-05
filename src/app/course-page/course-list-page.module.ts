import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListPageComponent } from './course-list-page/course-list-page.component';
import { CoursePageItemComponent } from './course-page-item/course-page-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [CourseListPageComponent, CoursePageItemComponent,
    LoadMoreComponent, SearchCourseComponent, AddCourseComponent,
    BreadcrumbsComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseListPageComponent]
})
export class CourseListPageModule { }
