import { Component, OnInit } from '@angular/core';
import {CourseItem} from '../course-item.model';
import {UserIdentity} from '../user-identity.model';
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  public courseItems: CourseItem[] = [{
    id: 1,
    title: 'Video Course 1',
    createDate: '05.23.2018',
    duration: '1h 28min',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 2,
    title: 'Video Course 2',
    createDate: '06.10.2018',
    duration: '27min',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 3,
    title: 'Video Course 3',
    createDate: '07.14.2018',
    duration: '1h 10min',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 4,
    title: 'Video Course 4',
    createDate: '07.16.2018',
    duration: '46min',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 5,
    title: 'Video Course 5',
    createDate: '08.21.2018',
    duration: '30min',
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
