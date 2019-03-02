import { Component, OnInit, OnChanges, DoCheck, OnDestroy, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { DatePipe} from '@angular/common';
import { FilterCoursePipe } from '../../filterCourse.pipe';
import { CoursesService } from '../../courses.service';
import { AuthorizationService } from '../../authorization.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription  } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [DatePipe, FilterCoursePipe]
})
export class CoursesPageComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit  {

  public courseItems: CourseItem[];
  public showCourseItem: boolean;
  public originalCourseItems: CourseItem[];
  public updatedCourseItem;
  public selectedCourseItem;
  public addCoursePage;
  public keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;

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

    this.subscription = this.keyUp.pipe(
        map(event => (event.target as HTMLInputElement).value),
        filter(text => text.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        ).subscribe(searchTerm=> {
            this.searchCourse(searchTerm)
        }
    );

    this.authorizationService.setLoginUserInfo();
  }

  ngAfterViewInit() {
    
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
    let pageStart = 0;
    let pageItemCount = 5;

    this.coursesService.removeItem(courseId).subscribe(data => {
      console.log(data);
      this.coursesService.getList(pageStart, pageItemCount).subscribe(data => {
        this.courseItems = data;
      });
    });
  }

  searchCourse(textFragment) {
    this.coursesService.searchCourses(textFragment).subscribe(data=> {
      console.log(data);
      this.courseItems = data;

    });
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

  loadMoreCourses(moreCourses) {
    this.courseItems = moreCourses;
  }
}
