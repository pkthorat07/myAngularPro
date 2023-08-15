import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginSuccessComponent } from './admin-login-success.component';

describe('AdminLoginSuccessComponent', () => {
  let component: AdminLoginSuccessComponent;
  let fixture: ComponentFixture<AdminLoginSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginSuccessComponent]
    });
    fixture = TestBed.createComponent(AdminLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
