import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadMoreComponent } from './load-more.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;
  let loadMoreDe: DebugElement;
  let loadMoreEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showLoadMore function should be called', async(() => {
    spyOn(component, 'showLoadMore');

    const button = fixture.debugElement.nativeElement.querySelector('.load-more-button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.showLoadMore).toHaveBeenCalled();
    });
  }));
});
