import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTable1Component } from './pricing-table-1.component';

describe('PricingTable1Component', () => {
  let component: PricingTable1Component;
  let fixture: ComponentFixture<PricingTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
