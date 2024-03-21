import { Component } from '@angular/core';
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  myFilter: DateFilterFn<Date | null> = (date: Date | null) => {
    const availableData = [5, 8, 12];
    return date
      ? date!.getDay() <= 5 && !availableData.includes(date!.getDate())
      : false;
  };

  public minDate = new Date();
  public maxDate = new Date(
    this.minDate.getFullYear(),
    this.minDate.getMonth() + 2,
    0
  );

  deserts = ['Бенто', 'Мини-торт', 'Торт 2кг+', 'Капкейки'];
  times = ['8:00-9:00', '9:00-10:00', '12:00-13:00'];
}
