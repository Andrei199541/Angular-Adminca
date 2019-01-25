import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard4Component } from './dashboard-4.component';

describe('Dashboard4Component', () => {
  let component: Dashboard4Component;
  let fixture: ComponentFixture<Dashboard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
