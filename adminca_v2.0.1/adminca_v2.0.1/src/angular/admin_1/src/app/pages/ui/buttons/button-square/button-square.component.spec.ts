import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSquareComponent } from './button-square.component';

describe('ButtonSquareComponent', () => {
  let component: ButtonSquareComponent;
  let fixture: ComponentFixture<ButtonSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
