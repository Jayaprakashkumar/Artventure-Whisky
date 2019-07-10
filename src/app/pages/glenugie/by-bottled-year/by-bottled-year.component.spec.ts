import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBottledYearComponent } from './by-bottled-year.component';

describe('ByBottledYearComponent', () => {
  let component: ByBottledYearComponent;
  let fixture: ComponentFixture<ByBottledYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByBottledYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByBottledYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
