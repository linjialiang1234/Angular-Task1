import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'add-course-date',
  templateUrl: './add-course-date.component.html',
  styleUrls: ['./add-course-date.component.css']
})
export class AddCourseDateComponent implements OnInit {
  public courseDate;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

}
