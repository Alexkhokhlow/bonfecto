import { NgModule } from '@angular/core';
import { SwiperModule } from './swiper/swiper.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [SwiperModule],
  exports: [SwiperModule, MaterialModule, FormsModule],
})
export class SharedModule {}
