import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLabeledComponent } from './button-labeled.component';

describe('ButtonLabeledComponent', () => {
  let component: ButtonLabeledComponent;
  let fixture: ComponentFixture<ButtonLabeledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLabeledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLabeledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
