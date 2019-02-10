import { Component, OnInit, OnChanges, DoCheck, OnDestroy  } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { UserIdentity } from '../user-identity.model';
import { DatePipe} from '@angular/common';
import { FilterCoursePipe } from '../../filterCourse.pipe';
import { CoursesService } from '../../courses.service';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [DatePipe, FilterCoursePipe]
})
export class CoursesPageComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  public courseItems: CourseItem[];
  public userIdentity: UserIdentity[];
  public showCourseItem: boolean;
  public originalCourseItems: CourseItem[];
  public updatedCourseItem;
  public selectedCourseItem;
  constructor(private _filterCoursePipe: FilterCoursePipe, private coursesService: CoursesService, private authorizationService: AuthorizationService) { }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
    this.courseItems = this.coursesService.getList();
    console.log(this.courseItems);
 
    this.originalCourseItems = this.courseItems;
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

  getCourseById(courseId) {
    this.selectedCourseItem = this.coursesService.getItemById(courseId);
    console.log(this.selectedCourseItem);
  }

  updateCourse(courseId) {
    this.updatedCourseItem = this.coursesService.updateItem(courseId);
    console.log(this.updatedCourseItem);
  }

  deleteCourse(courseId) {
    this.courseItems = this.coursesService.removeItem(courseId);
  }

  searchCourse(courseInformation) {
    let showFilterCourse;
    showFilterCourse = this._filterCoursePipe.transform(this.originalCourseItems, courseInformation);
    this.courseItems = showFilterCourse;
  }

  isAuth() {
    return this.authorizationService.isAuthenticated();
  }
}
