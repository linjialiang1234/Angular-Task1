import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { CoursesService } from '../../courses.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, 
  FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  public courseTitle: string;
  public createdCourseItem = {
    id: 999999,
    // name: null,
    // description: null,
    isTopRated: true,
    date: '2018, 11, 27',
    authors: [],
    length: 88
  };
  public courseForm : FormGroup;



  constructor(private authorizationService: AuthorizationService,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      name: ['', Validators.max(50)],
      description: ['', Validators.max(500)],
      user: ['', Validators.max(500)]
    })

    
  }

  ngOnInit() {
  }

  save() {
    this.coursesService.createCourse(this.createdCourseItem).subscribe(data=> {
      console.log(data);
      this.router.navigate(['/courses']);
    });
  }

  cancel() {

  }

  updateCourseItemDate(event){
    this.createdCourseItem.date=event;

  }

  updateCourseItemAuthors(event) {
    this.createdCourseItem.authors.push(event);
  }

  updateCourseItemLength(event) {
    this.createdCourseItem.length=event;

  }

  onSubmit() {
    console.log(this.courseForm.value);
  }

}
