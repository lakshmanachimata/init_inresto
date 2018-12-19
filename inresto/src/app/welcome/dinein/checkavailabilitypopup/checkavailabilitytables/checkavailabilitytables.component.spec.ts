import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilitytablesComponent } from './checkavailabilitytables.component';

describe('CheckavailabilitytablesComponent', () => {
  let component: CheckavailabilitytablesComponent;
  let fixture: ComponentFixture<CheckavailabilitytablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilitytablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilitytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
