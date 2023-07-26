import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLoginSuccessComponent } from './owner-login-success.component';

describe('OwnerLoginSuccessComponent', () => {
  let component: OwnerLoginSuccessComponent;
  let fixture: ComponentFixture<OwnerLoginSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerLoginSuccessComponent]
    });
    fixture = TestBed.createComponent(OwnerLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
