import { NgModule } from '@angular/core';
import { SwiperModule } from './swiper/swiper.module';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [SwiperModule, MaterialModule, FormsModule],
  exports: [SwiperModule, MaterialModule, FormsModule],
})
export class SharedModule {}
