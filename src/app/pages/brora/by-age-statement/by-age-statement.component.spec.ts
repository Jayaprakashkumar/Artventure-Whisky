import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAgeStatementComponent } from './by-age-statement.component';

describe('ByAgeStatementComponent', () => {
  let component: ByAgeStatementComponent;
  let fixture: ComponentFixture<ByAgeStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByAgeStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByAgeStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
