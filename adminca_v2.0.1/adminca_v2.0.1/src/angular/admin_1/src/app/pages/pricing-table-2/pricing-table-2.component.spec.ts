import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTable2Component } from './pricing-table-2.component';

describe('PricingTable2Component', () => {
  let component: PricingTable2Component;
  let fixture: ComponentFixture<PricingTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
