import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { DurationPipe } from '../../duration.pipe';

@Component({
  selector: 'add-course-duration',
  templateUrl: './add-course-duration.component.html',
  styleUrls: ['./add-course-duration.component.css']
})
export class AddCourseDurationComponent implements OnInit {
  public courseDuration;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }


}
