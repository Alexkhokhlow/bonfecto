import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/ordertest/ordertest.module').then(
        (m) => m.OrdertestModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'order' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
