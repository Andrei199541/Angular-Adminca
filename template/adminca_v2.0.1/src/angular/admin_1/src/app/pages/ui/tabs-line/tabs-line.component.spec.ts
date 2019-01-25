import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsLineComponent } from './tabs-line.component';

describe('TabsLineComponent', () => {
  let component: TabsLineComponent;
  let fixture: ComponentFixture<TabsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
