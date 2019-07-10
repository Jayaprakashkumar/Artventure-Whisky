import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCasksComponent } from './by-casks.component';

describe('ByCasksComponent', () => {
  let component: ByCasksComponent;
  let fixture: ComponentFixture<ByCasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByCasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
