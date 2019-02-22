import { Component, OnInit, Input, Output, EventEmitter, Inject, ChangeDetectionStrategy} from '@angular/core';
import {CourseItem} from '../course-item.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from '../delete-dialog/dialog-overview-example-dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-course-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItem;
  @Output() update: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  // updateCourse(courseId: number) {
  //   this.update.emit(courseId);
  // }

  displayStarIcon() {
    if (this.courseItem.isTopRated) {
      return true;
    } else {
      return false;
    }

  }

   openDialog(courseId: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, courseItemId: courseId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.delete.emit(courseId);
    });
  }

}


