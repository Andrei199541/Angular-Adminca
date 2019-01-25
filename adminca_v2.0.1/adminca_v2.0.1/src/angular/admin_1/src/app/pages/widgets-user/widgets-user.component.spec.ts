import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsUserComponent } from './widgets-user.component';

describe('WidgetsUserComponent', () => {
  let component: WidgetsUserComponent;
  let fixture: ComponentFixture<WidgetsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
