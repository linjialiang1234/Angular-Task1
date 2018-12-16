import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let coursePageDe: DebugElement;
  let coursePageEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent, CourseItemComponent,
        LoadMoreComponent, SearchCourseComponent, AddCourseComponent,
        BreadcrumbsComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngChanges has been called', () => {
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.ngOnChanges).toBeDefined();
  });

  it('deleteCourse function should be trigged', () => {
    let courseId: number;
    const courseItems = [{
      id: 1 ,
      title: '123',
      createDate: new Date(),
      duration: 123,
      description: '123'
    },
    {
      id: 2 ,
      title: '123',
      createDate: new Date(),
      duration: 123,
      description: '123'
    },
    {
      id: 3 ,
      title: '123',
      createDate: new Date(),
      duration: 123,
      description: '123'
    },
    {
      id: 4 ,
      title: '123',
      createDate: new Date(),
      duration: 123,
      description: '123'
    },
    {
      id: 5 ,
      title: '123',
      createDate: new Date(),
      duration: 123,
      description: '123'
    }];
    component.courseItems = courseItems;
    courseId = 1;
    component.deleteCourse(courseId);
    fixture.detectChanges();
    expect(component.courseItems.length).toBe(4);
  });
});
