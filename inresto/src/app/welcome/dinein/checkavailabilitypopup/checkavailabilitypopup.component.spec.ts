import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilitypopupComponent } from './checkavailabilitypopup.component';

describe('CheckavailabilitypopupComponent', () => {
  let component: CheckavailabilitypopupComponent;
  let fixture: ComponentFixture<CheckavailabilitypopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckavailabilitypopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckavailabilitypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
