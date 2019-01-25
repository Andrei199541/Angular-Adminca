import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard6Component } from './dashboard-6.component';

describe('Dashboard6Component', () => {
  let component: Dashboard6Component;
  let fixture: ComponentFixture<Dashboard6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
