import { Component, OnInit, Input } from '@angular/core';
import {CourseItem} from '../course-item.model';

@Component({
  selector: 'app-course-page-item',
  templateUrl: './course-page-item.component.html',
  styleUrls: ['./course-page-item.component.css']
})
export class CoursePageItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;
  constructor() { }

  ngOnInit() {
  }

}
