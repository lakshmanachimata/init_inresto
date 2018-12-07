import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwalkinpopupComponent } from './addwalkinpopup.component';

describe('AddwalkinpopupComponent', () => {
  let component: AddwalkinpopupComponent;
  let fixture: ComponentFixture<AddwalkinpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwalkinpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwalkinpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
