import { Component, Input, Output, EventEmitter } from '@angular/core';
import product from 'src/app/interfaces/interfaces';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  @Input() public info!: product;
  @Output() public hideInfo: EventEmitter<Event> = new EventEmitter();
}
