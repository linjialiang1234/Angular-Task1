import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable()
export class Resolver implements Resolve<Observable<string>> {
  constructor(private coursesService: CoursesService) { }

  resolve() {
  	let pageStart = 0;
  	let pageItemCount = 5;
    return this.coursesService.getList(pageStart,pageItemCount);
  }
}