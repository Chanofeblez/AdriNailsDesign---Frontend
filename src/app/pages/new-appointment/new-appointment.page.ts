import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.page.html',
  styleUrls: ['./new-appointment.page.scss'],
})
export class NewAppointmentPage implements OnInit {

  appointment: any = {};

  private appointmentService = inject(AppointmentService);
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  createAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      this.router.navigate(['/appointments']);
    });
  }


}
