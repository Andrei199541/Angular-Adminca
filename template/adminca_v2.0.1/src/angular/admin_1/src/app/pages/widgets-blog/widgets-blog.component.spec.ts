import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsBlogComponent } from './widgets-blog.component';

describe('WidgetsBlogComponent', () => {
  let component: WidgetsBlogComponent;
  let fixture: ComponentFixture<WidgetsBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
