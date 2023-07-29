import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerHotelRegistrationComponent } from './owner-hotel-registration.component';

describe('OwnerHotelRegistrationComponent', () => {
  let component: OwnerHotelRegistrationComponent;
  let fixture: ComponentFixture<OwnerHotelRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerHotelRegistrationComponent]
    });
    fixture = TestBed.createComponent(OwnerHotelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
