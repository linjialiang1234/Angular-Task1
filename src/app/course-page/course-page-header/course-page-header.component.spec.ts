import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageHeaderComponent } from './course-page-header.component';

describe('CoursePageHeaderComponent', () => {
  let component: CoursePageHeaderComponent;
  let fixture: ComponentFixture<CoursePageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
