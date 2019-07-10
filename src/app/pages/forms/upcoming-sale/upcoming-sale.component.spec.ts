import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSaleComponent } from './upcoming-sale.component';

describe('UpcomingSaleComponent', () => {
  let component: UpcomingSaleComponent;
  let fixture: ComponentFixture<UpcomingSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
