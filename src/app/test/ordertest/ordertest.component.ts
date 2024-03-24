import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DateFilterFn,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';
import { communicationMethod, orderTimes } from 'src/app/data/orderData';
import { productInfo } from 'src/app/data/productData';
import { unavailableDate } from 'src/app/data/unavailableOrderDate';
import { Decor } from 'src/app/interfaces/interfaces';
import { OrdertestService } from '../ordertest.service';

@Component({
  selector: 'app-ordertest',
  templateUrl: './ordertest.component.html',
  styleUrl: './ordertest.component.scss',
})
export class OrdertestComponent {
  public file: File | null = null;
  public form;
  public products;
  public selectedProduct;
  public minOrderDate;
  public maxOrderDate;
  public unavailableDate;
  public availableTimes;
  public communicationMethod;
  public communicationType;

  constructor(private orderTestService: OrdertestService) {
    this.products = productInfo;
    this.selectedProduct = this.products[0];
    this.minOrderDate = new Date();
    this.maxOrderDate = new Date(
      this.minOrderDate.getFullYear(),
      this.minOrderDate.getMonth() + 2,
      0
    );
    this.unavailableDate = unavailableDate;
    this.availableTimes = orderTimes;
    this.communicationMethod = communicationMethod;
    this.communicationType = { title: 'Выберете способ связи', prefix: '@' };

    this.form = new FormGroup({
      type: new FormControl('', [Validators.required]),
      filling: new FormControl('', [Validators.required]),
      decor: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      communicationMethod: new FormControl('', [Validators.required]),
      communicationData: new FormControl('', [Validators.required]),
      notes: new FormControl(''),
      images: new FormArray([]),
    });

    this.disableInputs([
      'filling',
      'decor',
      'date',
      'time',
      'communicationData',
    ]);
  }

  selectProduct(event: MatSelectChange) {
    this.selectedProduct = this.products.find(
      (item) => item.title === event.value
    )!;

    this.form.get('filling')?.enable();
    this.cleanInputs(['filling', 'decor', 'date', 'time']);
    this.disableInputs(['decor', 'date', 'time']);
  }

  selectAvailableDecor() {
    this.form.get('decor')?.enable();
    this.cleanInputs(['decor', 'date', 'time']);
    this.disableInputs(['date', 'time']);
  }

  selectAvailableDate(event: MatSelectChange) {
    this.minOrderDate = new Date();
    const decor = event.value as Decor;

    if (this.selectedProduct.id === 0) {
      if (decor.time > 3) {
        this.minOrderDate.setHours(8);
        this.minOrderDate.setDate(this.minOrderDate.getDate() + 4);
      } else if (
        this.minOrderDate.getHours() > 18 &&
        this.minOrderDate.getHours() < 21
      ) {
        this.minOrderDate.setHours(9);
        this.minOrderDate.setDate(this.minOrderDate.getDate() + 1);
      } else if (this.minOrderDate.getHours() >= 21) {
        this.minOrderDate.setHours(11);
        this.minOrderDate.setDate(this.minOrderDate.getDate() + 1);
      } else if (this.minOrderDate.getHours() < 8) {
        this.minOrderDate.setHours(11);
      } else {
      }
    } else {
      if (this.minOrderDate.getHours() >= 21) {
        this.minOrderDate.setHours(8);
        this.minOrderDate.setDate(this.minOrderDate.getDate() + 1);
      } else if (this.minOrderDate.getHours() < 8) {
        this.minOrderDate.setHours(8);
      }
      this.minOrderDate.setHours(this.minOrderDate.getHours() + decor.time);
    }

    this.form.get('date')?.enable();
    this.cleanInputs(['date', 'time']);
    this.disableInputs(['time']);
  }

  selectAvailableTime(date: MatDatepickerInputEvent<Date, Date | null>) {
    if (date) {
      this.availableTimes = orderTimes;
      this.availableTimes = this.orderTestService.checkDate(
        this.minOrderDate,
        date.value!
      )
        ? this.availableTimes.filter(
            (item) => item.id > this.minOrderDate.getHours()
          )
        : orderTimes;
    }
    this.form.get('time')?.enable();
    this.cleanInputs(['time']);
  }

  changeCommunicationDataInput(event: MatSelectChange) {
    this.form.get('communicationData')?.enable();

    switch (event.value) {
      case 'Telegram': {
        this.communicationType = { title: 'Ваш Telegram', prefix: '@' };
        break;
      }
      case 'Instagram': {
        this.communicationType = {
          title: 'Ваш Instagram',
          prefix: '@',
        };

        break;
      }
      case 'Телефон': {
        this.communicationType = this.communicationType = {
          title: 'Номер телефона',
          prefix: '+375 ',
        };

        break;
      }
      default: {
        this.communicationType = { title: '', prefix: '' };
        break;
      }
    }
  }

  myFilter: DateFilterFn<Date | null> = (date: Date | null) => {
    return date && date!.getDay() !== 0
      ? !this.unavailableDate.find((item) =>
          this.orderTestService.checkDate(item, date)
        )
      : false;
  };

  cleanInputs(name: string[]) {
    name.forEach((item) => {
      this.form.get(item)?.setValue('');
    });
  }

  disableInputs(name: string[]) {
    name.forEach((item) => {
      this.form.get(item)?.disable();
    });
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  onSend(): void {
    if (this.file) {
      this.orderTestService.sendPhoto(this.file);
    }
  }
}
