import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByEditionBowmoreComponent } from './by-edition-bowmore.component';

describe('ByEditionBowmoreComponent', () => {
  let component: ByEditionBowmoreComponent;
  let fixture: ComponentFixture<ByEditionBowmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByEditionBowmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByEditionBowmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
