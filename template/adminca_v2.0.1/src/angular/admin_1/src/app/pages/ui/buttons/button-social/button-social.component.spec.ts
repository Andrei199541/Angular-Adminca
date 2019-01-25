import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSocialComponent } from './button-social.component';

describe('ButtonSocialComponent', () => {
  let component: ButtonSocialComponent;
  let fixture: ComponentFixture<ButtonSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
