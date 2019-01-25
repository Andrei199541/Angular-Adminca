import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeityChartComponent } from './peity-chart.component';

describe('PeityChartComponent', () => {
  let component: PeityChartComponent;
  let fixture: ComponentFixture<PeityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
