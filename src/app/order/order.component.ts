import { Component } from '@angular/core';
import {
  DateFilterFn,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { productInfo } from '../data/productData';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public products = productInfo;
  public selectProduct = this.products[0];
  public minOrderDate = new Date();
  public times = [
    { id: 9, time: '8:00-9:00' },
    { id: 10, time: '9:00-10:00' },
    { id: 11, time: '10:00-11:00' },
    { id: 12, time: '11:00-12:00' },
    { id: 13, time: '12:00-13:00' },
    { id: 14, time: '13:00-14:00' },
    { id: 15, time: '14:00-15:00' },
    { id: 16, time: '15:00-16:00' },
    { id: 17, time: '16:00-17:00' },
    { id: 18, time: '17:00-18:00' },
    { id: 19, time: '18:00-19:00' },
    { id: 20, time: '19:00-20:00' },
    { id: 21, time: '20:00-21:00' },
  ];
  public availableTimes = this.times;
  public orderForm = {
    name: '',
    type: '',
    filling: '',
    decor: '',
    date: '',
    time: '',
  };
  public maxOrderDate = new Date(
    this.minOrderDate.getFullYear(),
    this.minOrderDate.getMonth() + 2,
    0
  );
  unavailableDate = [
    new Date(2024, 3, 9),
    new Date(2024, 2, 5),
    new Date(2024, 2, 23),
  ];

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
    return date && date!.getDay() <= 5
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
        : this.times;
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
