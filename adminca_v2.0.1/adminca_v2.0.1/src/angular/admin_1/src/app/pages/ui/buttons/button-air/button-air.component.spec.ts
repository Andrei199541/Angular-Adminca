import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAirComponent } from './button-air.component';

describe('ButtonAirComponent', () => {
  let component: ButtonAirComponent;
  let fixture: ComponentFixture<ButtonAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
