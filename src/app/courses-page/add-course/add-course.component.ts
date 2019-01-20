import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public createdCourseItem;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  addCourseItem(courseInformation) {
    this.createdCourseItem = this.coursesService.createCourse(courseInformation);
    console.log(this.createdCourseItem);

  }

}
