import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let expectedCourseItem;
  let courseItemDe: DebugElement;
  let courseItemEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    courseItemDe = fixture.debugElement.query(By.css('.delete-button'));
    courseItemEl = courseItemDe.nativeElement;

    expectedCourseItem = {
      id: 1 ,
      title: '123',
      createDate: new Date(),
      duration: 123,
      description: '123'
    };

    component.courseItem = expectedCourseItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a course item when click delete button', () => {
    let selectedId: number;
    let courseId: number;
    component.delete.subscribe((courseId) => selectedId = courseId);
    courseItemDe.triggerEventHandler('click', null);
    expect(selectedId).toBe(expectedCourseItem.id);
  });
});
