import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  serviceType: string = "";
  appointmentDate: Date = new Date();
  estimatedCost: number = 0;

  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    // Puedes cargar los datos de la cita aquí desde un servicio o almacenamiento local
  }

  proceedToPayment() {
    // Lógica para iniciar el proceso de pago, puedes redirigir a la página de éxito o fallo dependiendo de la respuesta de la API de Stripe
    this.router.navigate(['/payment-success']); // Ejemplo de redirección
  }

}
