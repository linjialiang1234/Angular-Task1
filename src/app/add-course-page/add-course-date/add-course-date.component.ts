import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'add-course-date',
  templateUrl: './add-course-date.component.html',
  styleUrls: ['./add-course-date.component.css']
})
export class AddCourseDateComponent implements OnInit {
  public courseDate;
  @Input() public createdCourseItemDate;
  @Output() updateCreatedCourseItemDate: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  updateCourseDate() {
  	this.updateCreatedCourseItemDate.emit(this.createdCourseItemDate);
  }

}
