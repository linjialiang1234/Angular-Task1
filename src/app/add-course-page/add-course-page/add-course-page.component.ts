import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  public courseTitle: string;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }
  
  save() {

  }

  cancel() {

  }

}
