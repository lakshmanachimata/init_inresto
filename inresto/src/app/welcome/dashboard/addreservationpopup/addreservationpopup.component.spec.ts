import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreservationpopupComponent } from './addreservationpopup.component';

describe('AddreservationpopupComponent', () => {
  let component: AddreservationpopupComponent;
  let fixture: ComponentFixture<AddreservationpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreservationpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreservationpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
