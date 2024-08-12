import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.page.html',
  styleUrls: ['./appointment-details.page.scss'],
})
export class AppointmentDetailsPage implements OnInit {

  appointment: any;

  private route = inject(ActivatedRoute);
    private appointmentService= inject(AppointmentService)
    private router= inject(Router);

  constructor() { }

  ngOnInit() {
    this.loadAppointment();
  }

  loadAppointment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.appointmentService.getAppointmentById(id).subscribe(data => {
      this.appointment = data;
    });
  }

  payDeposit() {
    // Lógica para realizar el pago del depósito
  }

  cancelAppointment() {
    // Lógica para cancelar la cita
    this.router.navigate(['/appointments']);
  }

}
