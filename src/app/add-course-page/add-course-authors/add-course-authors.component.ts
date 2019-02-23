import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'add-course-authors',
  templateUrl: './add-course-authors.component.html',
  styleUrls: ['./add-course-authors.component.css']
})
export class AddCourseAuthorsComponent implements OnInit {
  public courseAuthors;
  @Input() public createdCourseItemAuthors;
  @Output() updateCreatedCourseItemAuthors: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  updateCourseAuthors() {
  	this.updateCreatedCourseItemAuthors.emit(this.createdCourseItemAuthors);
  }

}
