import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilerestaurentsComponent } from './availabilerestaurents.component';

describe('AvailabilerestaurentsComponent', () => {
  let component: AvailabilerestaurentsComponent;
  let fixture: ComponentFixture<AvailabilerestaurentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilerestaurentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilerestaurentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
