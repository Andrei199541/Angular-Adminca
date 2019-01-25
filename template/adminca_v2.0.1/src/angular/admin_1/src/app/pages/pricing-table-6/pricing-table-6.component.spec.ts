import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTable6Component } from './pricing-table-6.component';

describe('PricingTable6Component', () => {
  let component: PricingTable6Component;
  let fixture: ComponentFixture<PricingTable6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTable6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTable6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
