import { Injectable } from '@angular/core';
// import { DurationPipe } from './duration.pipe';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courseItems = [
  {
    id: 1,
    title: 'Video Course 1',
    createDate: this.createDate(2018, 11, 27),
    duration: 88,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: true
  },
  {
    id: 2,
    title: 'Video Course 2',
    createDate: this.createDate(2018, 12, 30),
    duration: 27,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industtopRated: false;ry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: false
  },
  {
    id: 3,
    title: 'Video Course 3',
    createDate: this.createDate(2018, 6, 14),
    duration: 70,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: false
  },
  {
    id: 4,
    title: 'Video Course 4',
    createDate: this.createDate(2018, 6, 16),
    duration: 46,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: true
  },
  {
    id: 5,
    title: 'Video Course 5',
    createDate: this.createDate(2018, 9, 21),
    duration: 30,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    topRated: false
  }];

  public userIdentity = [{
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

  public updatedCourseItem;
  public selectedCourseItem;

  constructor() { }

  createDate(y, m, d): any {
      const date: any = new Date(y, m, d);
      return date;
  }

  getList() {
    return this.courseItems;
  }

  createCourse(courseInformation) {
    this.courseItems.push(courseInformation);
    return courseInformation;
  }

  getItemById(courseId) {
    this.courseItems.forEach((course, index) => {
      if (course.id === courseId) {
        this.selectedCourseItem = course;
      }
    });

    return this.selectedCourseItem;
  }

  updateItem(courseId) {
    this.courseItems.forEach((course, index) => {
      if (course.id === courseId) {
        this.updatedCourseItem = course;
      }
    });

    return this.updatedCourseItem;
  }

  removeItem(courseId) {
    this.courseItems.forEach((course, index) => {
      if (course.id === courseId) {
        this.courseItems.splice(index, 1);
      }
    });
    return this.courseItems;

  }
}
