import { Injectable } from '@angular/core';
import { productInfo } from 'src/app/data/productData';
import Product, { OrderForm, OrderTime } from 'src/app/interfaces/interfaces';
import { communicationMethod, orderTimes } from 'src/app/data/orderData';
import { unavailableDate } from 'src/app/data/unavailableOrderDate';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectChange } from '@angular/material/select';
import {
  DateFilterFn,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';

@Injectable({
  providedIn: SharedModule,
})
export class OrderService {
  public products: Product[];
  public selectProduct: Product;
  public availableTimes: OrderTime[];
  public minOrderDate: Date;
  public maxOrderDate: Date;
  public unavailableDate: Date[];
  public communicationMethod: string[];
  public orderForm: OrderForm;

  constructor() {
    this.products = productInfo;
    this.selectProduct = this.products[0];
    this.availableTimes = orderTimes;
    this.minOrderDate = new Date();
    this.maxOrderDate = new Date(
      this.minOrderDate.getFullYear(),
      this.minOrderDate.getMonth() + 2,
      0
    );
    this.unavailableDate = unavailableDate;
    this.communicationMethod = communicationMethod;
    this.orderForm = {
      name: '',
      type: '',
      filling: '',
      decor: '',
      date: '',
      time: '',
      communicationMethod: '',
      communicationData: '',
    };
  }

  changeTypeProduct(event: MatSelectChange): void {
    this.orderForm.filling = '';
    this.orderForm.decor = '';
    this.orderForm.date = '';
    this.orderForm.time = '';
    this.minOrderDate = new Date();
    this.selectProduct = this.products.find((item) => item.id === event.value)!;
  }

  changeFilling() {
    this.orderForm.decor = '';
    this.orderForm.date = '';
    this.orderForm.time = '';
  }

  changeDecor(event: MatSelectChange): void {
    this.orderForm.date = '';
    this.orderForm.time = '';

    this.minOrderDate = new Date();

    if (this.minOrderDate.getHours() > 18 && Number(this.orderForm.type) == 1) {
      this.minOrderDate.setHours(11);
      this.minOrderDate.setDate(this.minOrderDate.getDate() + 1);
    } else {
      this.minOrderDate.setHours(this.minOrderDate.getHours() + event.value);
    }

    if (this.minOrderDate.getHours() > 21) {
      this.minOrderDate.setHours(8);
      this.minOrderDate.setDate(this.minOrderDate.getDate() + 1);
    }

    if (this.minOrderDate.getHours() < 8) {
      this.minOrderDate.setHours(8);
    }

    if (
      this.unavailableDate.find((item) =>
        this.checkDate(item, this.minOrderDate)
      )
    ) {
      this.minOrderDate.setHours(8);
      this.minOrderDate.setDate(this.minOrderDate.getDate() + 1);
    }
  }

  myFilter: DateFilterFn<Date | null> = (date: Date | null) => {
    return date && date!.getDay() <= 8
      ? !this.unavailableDate.find((item) => this.checkDate(item, date))
      : false;
  };

  changeDate(date: MatDatepickerInputEvent<Date, Date | null>) {
    this.orderForm.time = '';

    if (date) {
      this.availableTimes = this.checkDate(date.value!)
        ? this.availableTimes.filter(
            (item) => item.id > this.minOrderDate.getHours()
          )
        : orderTimes;
    }
  }

  checkDate(date1: Date, date2?: Date): boolean {
    if (!date2) {
      date2 = new Date();
    }

    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth()
    );
  }
}
