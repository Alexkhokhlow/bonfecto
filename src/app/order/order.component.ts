import { Component } from '@angular/core';
import {
  DateFilterFn,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { productInfo } from '../data/productData';
import { MatSelectChange } from '@angular/material/select';
import { OrderService } from './services/order.service';
import { OrderForm } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public communicationType: { title: string; prefix: string };
  public orderForm: OrderForm;
  public selectedFiles?: FileList;
  public previews: { id: number; file: string }[];

  constructor(public orderService: OrderService) {
    this.communicationType = { title: '', prefix: '' };
    this.orderForm = orderService.orderForm;
    this.previews = [];
  }

  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;

    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.orderService.previews.push({
            id: this.previews.length,
            file: e.target.result,
          });
          console.log(e.target.result);
          this.previews.push({
            id: this.previews.length,
            file: e.target.result,
          });
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  removePhoto(id: number) {
    this.previews = this.previews.filter((item) => item.id !== id);
  }

  selectCommunicationType(event: MatSelectChange) {
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
}
