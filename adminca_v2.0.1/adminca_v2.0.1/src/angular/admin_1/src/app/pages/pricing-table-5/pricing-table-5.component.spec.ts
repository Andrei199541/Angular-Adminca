import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTable5Component } from './pricing-table-5.component';

describe('PricingTable5Component', () => {
  let component: PricingTable5Component;
  let fixture: ComponentFixture<PricingTable5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTable5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTable5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
