import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit, OnChanges {
  @Input() public courseItems;
  @Output() loadMore: EventEmitter<any> = new EventEmitter<any>();

  constructor(private coursesService: CoursesService, private route: ActivatedRoute,private location: Location, private router: Router) { }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  showLoadMore() {
    let pageStart = 0;
    let pageItemCount = 0;
    this.coursesService.getList(pageStart, pageItemCount).subscribe(data => {
        this.courseItems = data;
        this.loadMore.emit(this.courseItems);
      });
    

  }

  displayCourseItem() {
    if (this.courseItems.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
