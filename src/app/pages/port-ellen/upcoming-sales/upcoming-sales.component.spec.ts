import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSalesComponent } from './upcoming-sales.component';

describe('UpcomingSalesComponent', () => {
  let component: UpcomingSalesComponent;
  let fixture: ComponentFixture<UpcomingSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
