import { Component, OnInit, OnChanges, DoCheck, OnDestroy, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { UserIdentity } from '../user-identity.model';
import { DatePipe} from '@angular/common';
import { FilterCoursePipe } from '../../filterCourse.pipe';
import { CoursesService } from '../../courses.service';
import { AuthorizationService } from '../../authorization.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// import 'rxjs/add/observable/fromEvent';
import { fromEvent } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [DatePipe, FilterCoursePipe]
})
export class CoursesPageComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit  {
  @ViewChild('searchRef') searchRef: ElementRef;

  public courseItems: CourseItem[];
  public userIdentity: UserIdentity[];
  public showCourseItem: boolean;
  public originalCourseItems: CourseItem[];
  public updatedCourseItem;
  public selectedCourseItem;
  public addCoursePage;
  private term = new FormControl();

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

    console.log(this.searchRef);
    this.term.valueChanges.
      debounceTime(400)
        .distinctUntilChanged()
        .subscribe(searchTerm=> {
          this.searchCourse(searchTerm)
        });

     
  }

  ngAfterViewInit() {
    // console.log(this.searchRef);
    // const obs =fromEvent(this.searchRef.nativeElement, 'keyup')
    //   // get value
    //   .map((evt: any) => evt.target.value)
    //   // text length must be > 2 chars
    //   //.filter(res => res.length > 2)
    //   // emit after 1s of silence
    //   .debounceTime(1000)        
    //   // emit only if data changes since the last emit       
    //   .distinctUntilChanged()
    //   // subscription
    //   .subscribe((text: string) => this.searchCourse(text));
    // const obs =fromEvent(this.searchRef.nativeElement, 'keyup')
    //   // get value
    //   .map((evt: any) => evt.target.value)
    //   // text length must be > 2 chars
    //   //.filter(res => res.length > 2)
    //   // emit after 1s of silence
    //   .debounceTime(1000)        
    //   // emit only if data changes since the last emit       
    //   .distinctUntilChanged()
    //   // subscription
    //   obs.subscribe((text: string) => this.searchCourse(text));

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
