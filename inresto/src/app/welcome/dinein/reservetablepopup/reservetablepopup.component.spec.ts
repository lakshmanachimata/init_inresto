import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservetablepopupComponent } from './reservetablepopup.component';

describe('ReservetablepopupComponent', () => {
  let component: ReservetablepopupComponent;
  let fixture: ComponentFixture<ReservetablepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservetablepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservetablepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
