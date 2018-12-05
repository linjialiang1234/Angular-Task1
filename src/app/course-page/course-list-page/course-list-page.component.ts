import { Component, OnInit } from '@angular/core';
import {CourseItem} from '../course-item.model';
import {UserIdentity} from '../user-identity.model';
@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {
  createDate(year, month, date): any {
      var date: any = new Date(year, month, date);
      return date.toDateString();
  }

  createDuration(min): any {
    var min = min;
    var hours = (min/60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);

    return rhours + " hour(s) " + rminutes + " minute(s)"
  }
  public courseItems: CourseItem[] = [{
    id: 1,
    title: 'Video Course 1',
    createDate: this.createDate(2018, 4, 23),
    duration: this.createDuration(88),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 2,
    title: 'Video Course 2',
    createDate: this.createDate(2018, 9, 6),
    duration: this.createDuration(27),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 3,
    title: 'Video Course 3',
    createDate: this.createDate(2018, 6, 14),
    duration: this.createDuration(70),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 4,
    title: 'Video Course 4',
    createDate: this.createDate(2018, 6, 16),
    duration: this.createDuration(46),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 5,
    title: 'Video Course 5',
    createDate: this.createDate(2018, 9, 21),
    duration: this.createDuration(30),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  }];

  public userIdentity: UserIdentity[] = [{
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
  constructor() { }

  ngOnInit() {
  }

}
