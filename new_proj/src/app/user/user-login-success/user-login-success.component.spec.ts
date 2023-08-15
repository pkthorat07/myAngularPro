import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginSuccessComponent } from './user-login-success.component';

describe('UserLoginSuccessComponent', () => {
  let component: UserLoginSuccessComponent;
  let fixture: ComponentFixture<UserLoginSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoginSuccessComponent]
    });
    fixture = TestBed.createComponent(UserLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
