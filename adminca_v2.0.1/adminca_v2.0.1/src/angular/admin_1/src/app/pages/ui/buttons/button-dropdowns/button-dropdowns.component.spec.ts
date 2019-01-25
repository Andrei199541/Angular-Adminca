import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDropdownsComponent } from './button-dropdowns.component';

describe('ButtonDropdownsComponent', () => {
  let component: ButtonDropdownsComponent;
  let fixture: ComponentFixture<ButtonDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
