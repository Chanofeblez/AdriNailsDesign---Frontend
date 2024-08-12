import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent  implements OnInit {

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

}
