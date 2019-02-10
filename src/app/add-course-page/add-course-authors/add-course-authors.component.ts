import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'add-course-authors',
  templateUrl: './add-course-authors.component.html',
  styleUrls: ['./add-course-authors.component.css']
})
export class AddCourseAuthorsComponent implements OnInit {
  public courseAuthors;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

}
