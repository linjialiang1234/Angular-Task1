import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { CoursesService } from '../../courses.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy  {
  public courseId;
  private subscribtion: any;
  public courseItem;
  public copyOfCourseItem;

  constructor(private authorizationService: AuthorizationService,
  	private coursesService: CoursesService,
  	private route: ActivatedRoute,
  	private router: Router) { }

  ngOnInit() {
  	// this.coursesService.updateItem(courseId);
  	this.subscribtion = this.route.params.subscribe(params =>
  			this.courseId = params['id']);
  			console.log(this.courseId);

  	this.courseItem = this.coursesService.getItemById(this.courseId);
  	console.log(this.courseItem);
  	this.copyOfCourseItem = this.courseItem;
  }

  save() {
  	this.courseItem = this.coursesService.updateItem(this.courseItem);
  	this.router.navigate(['/courses']);
  }

  cancel() {
  	this.courseItem = this.copyOfCourseItem;
  	this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }



}
