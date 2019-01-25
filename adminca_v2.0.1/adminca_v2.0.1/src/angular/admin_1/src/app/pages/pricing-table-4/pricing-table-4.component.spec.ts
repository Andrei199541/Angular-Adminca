import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTable4Component } from './pricing-table-4.component';

describe('PricingTable4Component', () => {
  let component: PricingTable4Component;
  let fixture: ComponentFixture<PricingTable4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTable4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
