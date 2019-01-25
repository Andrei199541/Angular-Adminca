import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard5Component } from './dashboard-5.component';

describe('Dashboard5Component', () => {
  let component: Dashboard5Component;
  let fixture: ComponentFixture<Dashboard5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
