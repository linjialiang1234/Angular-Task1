import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCourseComponent } from './search-course.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SearchCourseComponent', () => {
  let component: SearchCourseComponent;
  let fixture: ComponentFixture<SearchCourseComponent>;
  let searchCourseDe: DebugElement;
  let searchCourseEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showCourseInfromation function should be called', async(() => {
    spyOn(component, 'showCourseInfromation');

    const button = fixture.debugElement.nativeElement.querySelector('.course-search-button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.showCourseInfromation).toHaveBeenCalled();
    });
  }));
});
