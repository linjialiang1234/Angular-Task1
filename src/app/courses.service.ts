import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courseItems;
  public updatedCourseItem;
  public selectedCourseItem;

  constructor(private http: HttpClient) { 

  }

  getList(start, count) {
    var result;
    result = this.http.get(`${BASE_URL}`,  {
      params: {
        start,
        count
      }
    });
    console.log(result);
    return result;
  }

  createDate(y, m, d): any {
      const date: any = new Date(y, m, d);
      return date;
  }

  createCourse(courseInformation) {
    var result;
    result = this.http.post(`${BASE_URL}`, courseInformation)
    
    console.log(result);
    return result;
  }

  getItemById(courseId) {
    courseId = Number(courseId);
    this.courseItems.forEach((course, index) => {
      if (course.id === courseId) {
        this.selectedCourseItem = course;
      }
    });

    return this.selectedCourseItem;
  }

  updateItem(courseInformation) {
    let courseId;
    courseId = Number(courseInformation.id);
    this.courseItems.forEach((course, index) => {
      if (course.id === courseId) {
        course = courseInformation;
      }
    });

    return this.courseItems;
  }

  removeItem(courseId) {
    var result;
    result = this.http.delete(`${BASE_URL}`+ '/' + courseId);
    console.log(result);
    return result;
  }

  searchCourses(textFragment) {
    var result;
    result = this.http.get(`${BASE_URL}`, {
      params: {
        textFragment
      }
    });

    return result;
  }
}
