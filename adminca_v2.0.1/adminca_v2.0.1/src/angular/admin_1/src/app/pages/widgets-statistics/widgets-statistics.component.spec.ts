import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsStatisticsComponent } from './widgets-statistics.component';

describe('WidgetsStatisticsComponent', () => {
  let component: WidgetsStatisticsComponent;
  let fixture: ComponentFixture<WidgetsStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
