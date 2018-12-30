import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseItem} from '../course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteCourse(courseId: number) {
    console.log('courseId:' + courseId);
    this.delete.emit(courseId);
  }

  displayStarIcon() {
    if (this.courseItem.topRated) {
      return true;
    } else {
      return false;
    }

  }

}
