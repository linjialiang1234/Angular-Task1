import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public createdCourseItem;
  public courseInformation = {
    id: 6,
    title: 'Video Course 6',
    createDate: this.createDate(2018, 11, 27),
    duration: 88,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: true
  }
  @Output() addCourse: EventEmitter<string> = new EventEmitter<string>();

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  createDate(y, m, d): any {
      const date: any = new Date(y, m, d);
      return date;
  }

  addCourseItem() {
    this.createdCourseItem = this.coursesService.createCourse(this.courseInformation);
    console.log(this.createdCourseItem);
    this.addCourse.emit(this.createdCourseItem);
  }

}
