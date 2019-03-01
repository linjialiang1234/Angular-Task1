import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CreatedDateDirective } from './course-item/createdDate.directive';
import { DurationPipe } from '../duration.pipe';
import { FilterCoursePipe } from '../filterCourse.pipe';
import { DialogOverviewExampleDialog } from './delete-dialog/dialog-overview-example-dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material';
import { LoginPageModule } from '../login-page/login-page.module';
import { AddCoursePageModule} from '../add-course-page/add-course-page.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';

@NgModule({
  declarations: [CoursesPageComponent, CourseItemComponent,
    LoadMoreComponent, SearchCourseComponent, AddCourseComponent,
    BreadcrumbsComponent, CreatedDateDirective, DurationPipe, FilterCoursePipe, DialogOverviewExampleDialog],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
  	MatFormFieldModule,
  	MatInputModule,
  	MatRippleModule,
  	MatDialogModule,
    LoginPageModule,
    AddCoursePageModule,
    RouterModule.forRoot(ROUTES)

  ],
  exports: [CoursesPageComponent,
  			MatButtonModule,
    		MatFormFieldModule,
    		MatInputModule,
    		MatRippleModule,
    		MatDialogModule,
        LoginPageModule,
        AddCoursePageModule],
  entryComponents: [DialogOverviewExampleDialog],

})
export class CoursesPageModule { }
