import { NgModule } from '@angular/core';
import { SwiperModule } from './swiper/swiper.module';

@NgModule({
  imports: [SwiperModule],
  exports: [SwiperModule],
})
export class SharedModule {}
