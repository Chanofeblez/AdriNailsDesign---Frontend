import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewAppointmentPage } from './new-appointment.page';

describe('NewAppointmentPage', () => {
  let component: NewAppointmentPage;
  let fixture: ComponentFixture<NewAppointmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
