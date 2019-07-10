import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByEditionComponent } from './by-edition.component';

describe('ByEditionComponent', () => {
  let component: ByEditionComponent;
  let fixture: ComponentFixture<ByEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
