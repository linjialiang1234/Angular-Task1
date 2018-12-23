import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  public courseInformation: string;
  @Output() searchCourse: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  searchCourseHandler(): void {
    console.log('Input Value: ' + this.courseInformation);
    this.searchCourse.emit(this.courseInformation);

  }

}
