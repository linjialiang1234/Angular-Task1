import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageItemComponent } from './course-page-item.component';

describe('CoursePageItemComponent', () => {
  let component: CoursePageItemComponent;
  let fixture: ComponentFixture<CoursePageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
