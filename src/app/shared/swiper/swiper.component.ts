import { Component, Input } from '@angular/core';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent {
  @Input() images!: string[];

  constructor() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
  }
}
