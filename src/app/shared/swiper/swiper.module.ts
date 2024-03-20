import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { SwiperModule as LibSwiper } from 'swiper/angular';

@NgModule({
  declarations: [SwiperComponent],
  imports: [CommonModule, LibSwiper],
  exports: [SwiperComponent],
})
export class SwiperModule {}
