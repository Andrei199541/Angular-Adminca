import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error4042Component } from './error-404-2.component';

describe('Error4042Component', () => {
  let component: Error4042Component;
  let fixture: ComponentFixture<Error4042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error4042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error4042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
