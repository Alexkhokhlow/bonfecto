import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdertestComponent } from './ordertest.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderTestRoutingModule } from './ordertest-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from './custom.date.adapter';

@NgModule({
  declarations: [OrdertestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OrderTestRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [{ provide: DateAdapter, useClass: CustomDateAdapter }],
})
export class OrdertestModule {}
