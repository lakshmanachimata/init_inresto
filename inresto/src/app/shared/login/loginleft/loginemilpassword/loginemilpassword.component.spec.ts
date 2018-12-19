import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginemilpasswordComponent } from './loginemilpassword.component';

describe('LoginemilpasswordComponent', () => {
  let component: LoginemilpasswordComponent;
  let fixture: ComponentFixture<LoginemilpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginemilpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginemilpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
