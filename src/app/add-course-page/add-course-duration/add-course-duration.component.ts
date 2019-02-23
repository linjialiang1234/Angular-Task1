import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { DurationPipe } from '../../duration.pipe';

@Component({
  selector: 'add-course-duration',
  templateUrl: './add-course-duration.component.html',
  styleUrls: ['./add-course-duration.component.css']
})
export class AddCourseDurationComponent implements OnInit {
  public courseDuration;
  @Input() public createdCourseItemLength;
  @Output() updateCreatedCourseItemLength: EventEmitter<number> = new EventEmitter<number>();

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  updateCourseLength() {
  	this.updateCreatedCourseItemLength.emit(this.createdCourseItemLength);
  }


}
