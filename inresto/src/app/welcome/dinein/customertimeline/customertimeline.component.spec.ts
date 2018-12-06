import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertimelineComponent } from './customertimeline.component';

describe('CustomertimelineComponent', () => {
  let component: CustomertimelineComponent;
  let fixture: ComponentFixture<CustomertimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
