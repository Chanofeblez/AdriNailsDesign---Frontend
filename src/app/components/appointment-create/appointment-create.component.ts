import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.scss'],
})
export class AppointmentCreateComponent  implements OnInit {

  appointment = {
    customerName: '',
    serviceType: '',
    appointmentDate: '',
    estimatedCost: 0,
    depositPaid: false
  };

  private appointmentService = inject(AppointmentService);
  private router= inject(Router);

  constructor() { }

  ngOnInit() {}

  createAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(response => {
      this.router.navigate(['/appointments']);
    });
  }



}
