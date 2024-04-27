import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdertestComponent } from './ordertest.component';

const routes: Routes = [
  {
    path: '',
    component: OrdertestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderTestRoutingModule {}
