import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadHomeComponent } from './load-home.component';

describe('LoadHomeComponent', () => {
  let component: LoadHomeComponent;
  let fixture: ComponentFixture<LoadHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
