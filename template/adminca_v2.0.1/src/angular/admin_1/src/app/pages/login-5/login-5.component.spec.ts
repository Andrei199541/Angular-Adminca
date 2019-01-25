import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login5Component } from './login-5.component';

describe('Login5Component', () => {
  let component: Login5Component;
  let fixture: ComponentFixture<Login5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
