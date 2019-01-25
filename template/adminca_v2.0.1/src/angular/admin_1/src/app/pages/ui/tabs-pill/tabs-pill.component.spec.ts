import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPillComponent } from './tabs-pill.component';

describe('TabsPillComponent', () => {
  let component: TabsPillComponent;
  let fixture: ComponentFixture<TabsPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
