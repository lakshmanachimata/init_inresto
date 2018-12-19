import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpinComponent } from './loginpin.component';

describe('LoginpinComponent', () => {
  let component: LoginpinComponent;
  let fixture: ComponentFixture<LoginpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
