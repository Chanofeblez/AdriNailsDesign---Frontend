import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './components/appointment-create/appointment-create.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./pages/appointments/appointments.module').then(m => m.AppointmentsPageModule)
  },
  {
    path: 'appointments/:id',
    loadChildren: () => import('./pages/appointment-details/appointment-details.module').then(m => m.AppointmentDetailsPageModule)
  },
  {
    path: 'new-appointment',
    loadChildren: () => import('./pages/new-appointment/new-appointment.module').then(m => m.NewAppointmentPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'payment-success',
    loadChildren: () => import('./pages/payment-success/payment-success.module').then(m => m.PaymentSuccessPageModule)
  },
  {
    path: 'payment-failure',
    loadChildren: () => import('./pages/payment-failure/payment-failure.module').then(m => m.PaymentFailurePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  //{ path: 'appointments', component: AppointmentListComponent },
  //{ path: 'appointments/create', component: AppointmentCreateComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
