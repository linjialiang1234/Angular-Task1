import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit, OnChanges {
  @Input() public courseItems;
  constructor() { }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  showLoadMore() {
    console.log('This button name is: Load More');
  }

  displayCourseItem() {
    if (this.courseItems.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
