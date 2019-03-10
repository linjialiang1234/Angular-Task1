import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const ADD_COURSE_DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AddCourseDateComponent),
  multi: true
};


@Component({
  selector: 'add-course-date',
  templateUrl: './add-course-date.component.html',
  styleUrls: ['./add-course-date.component.css'],
  providers: [ADD_COURSE_DATE_VALUE_ACCESSOR]
})
export class AddCourseDateComponent implements ControlValueAccessor {
  public courseDate;
  @Input() public createdCourseItemDate;
  @Output() updateCreatedCourseItemDate: EventEmitter<string> = new EventEmitter<string>();

  updateCourseDate() {
  	this.updateCreatedCourseItemDate.emit(this.createdCourseItemDate);
  }

  user: any;

  get name() {
    return this.user.name;
  }

  set name(value) {
    this.user.name = value;
    this.notifyValueChange();
  }

  get age() {
    return this.user.age;
  }

  set age(value) {
    this.user.age = value;
    this.notifyValueChange();
  }

  @Input() disabled: boolean;

  onChange: (value) => {};
  onTouched: () => {};

  constructor() {
    this.user = {};
  }

  notifyValueChange() {
    if (this.onChange) {
      this.onChange({
        name: this.name,
        age: this.age
      });
    }
  }

  writeValue(obj: any): void {
    this.user = obj;
    if (!this.user) {
      this.user = {};
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
