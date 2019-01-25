import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTable3Component } from './pricing-table-3.component';

describe('PricingTable3Component', () => {
  let component: PricingTable3Component;
  let fixture: ComponentFixture<PricingTable3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTable3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
