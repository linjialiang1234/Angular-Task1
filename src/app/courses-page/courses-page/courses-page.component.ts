import { Component, OnInit, OnChanges, DoCheck, OnDestroy  } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { UserIdentity } from '../user-identity.model';
import { DurationPipe } from '../../duration.pipe';
import { DatePipe} from '@angular/common';
import { FilterCoursePipe } from '../../filterCourse.pipe';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [DurationPipe, DatePipe, FilterCoursePipe]
})
export class CoursesPageComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  public courseItems: CourseItem[];
  public userIdentity: UserIdentity[];
  public showCourseItem: boolean;
  public originalCourseItems: CourseItem[];
  constructor(private _durationPipe: DurationPipe, private _filterCoursePipe: FilterCoursePipe) { }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
    this.courseItems = [{
    id: 1,
    title: 'Video Course 1',
    createDate: this.createDate(2018, 4, 23),
    duration: this.createDuration(88),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: true
  },
  {
    id: 2,
    title: 'Video Course 2',
    createDate: this.createDate(2018, 9, 6),
    duration: this.createDuration(27),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industtopRated: false;ry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: false
  },
  {
    id: 3,
    title: 'Video Course 3',
    createDate: this.createDate(2018, 6, 14),
    duration: this.createDuration(70),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: false
  },
  {
    id: 4,
    title: 'Video Course 4',
    createDate: this.createDate(2018, 6, 16),
    duration: this.createDuration(46),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: true
  },
  {
    id: 5,
    title: 'Video Course 5',
    createDate: this.createDate(2018, 9, 21),
    duration: this.createDuration(30),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: false
  }];

  this.userIdentity = [{
    id: 1,
    firstName: 'Leo',
    lastName: 'Lam'
  },
  {
    id: 2,
    firstName: 'Jack',
    lastName: 'Wang'
  },
  {
    id: 3,
    firstName: 'Tom',
    lastName: 'Ma'
  }];

  this.originalCourseItems = this.courseItems;

  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

  createDate(y, m, d): any {
      const date: any = new Date(y, m, d);
      return date;
      // let date = new DatePipe().transform(new Date(), 'yyyy/MM/dd');
      // return date;
  }

  createDuration(minutes): any {
    
    var transformedMinutes;
    transformedMinutes = this._durationPipe.transform(minutes);
    return transformedMinutes;
  }

  deleteCourse(courseId) {
    console.log('Deleted Course Id: ' + courseId);
    this.courseItems.forEach((course, index) => {
      if (course.id === courseId) {
        this.courseItems.splice(index, 1);
      }
    });

  }

  searchCourse(courseInformation) {
    var showFilterCourse;
    showFilterCourse = this._filterCoursePipe.transform(this.originalCourseItems, courseInformation);
    this.courseItems = showFilterCourse;
  }
}
