import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  appointments: any[] = [];

  private appointmentService = inject(AppointmentService);



  constructor() { }

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  viewAppointment(appointment: any) {
    // Redirige a la página de detalles de la cita
  }

}
