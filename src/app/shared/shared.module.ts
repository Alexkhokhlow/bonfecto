import { NgModule } from '@angular/core';
import { SwiperModule } from './swiper/swiper.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [SwiperModule, MaterialModule],
  exports: [SwiperModule, MaterialModule],
})
export class SharedModule {}
