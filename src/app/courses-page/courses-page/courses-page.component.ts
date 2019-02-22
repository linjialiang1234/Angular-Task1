import { Component, OnInit, OnChanges, DoCheck, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { UserIdentity } from '../user-identity.model';
import { DatePipe} from '@angular/common';
import { FilterCoursePipe } from '../../filterCourse.pipe';
import { CoursesService } from '../../courses.service';
import { AuthorizationService } from '../../authorization.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  public addCoursePage;
  constructor(private _filterCoursePipe: FilterCoursePipe, private coursesService: CoursesService, private authorizationService: AuthorizationService,
     private route: ActivatedRoute,private location: Location, private router: Router) {
   }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
    this.originalCourseItems = this.route.snapshot.data.products;
    this.courseItems = this.route.snapshot.data.products;
    console.log("courseItems:" + this.originalCourseItems);
    this.addCoursePage = false;
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
    this.courseItems = this.coursesService.getItemById(courseId);
    console.log(this.courseItems);
  }

  deleteCourse(courseId) {
    this.coursesService.removeItem(courseId).subscribe(data => {
      console.log(data);
      this.coursesService.getList().subscribe(data => {
        this.courseItems = data;
      });
    });
  }

  searchCourse(courseInformation) {
    let showFilterCourse;
    showFilterCourse = this._filterCoursePipe.transform(this.originalCourseItems, courseInformation);
    this.courseItems = showFilterCourse;
  }

  addCourse(addCourseInformation) {
    if (this.addCoursePage === false) {
      return this.addCoursePage = true;
    } else {
      return this.addCoursePage = false;
    }
  }

  isAuth() {
    return this.authorizationService.isAuthenticated();
  }
}
