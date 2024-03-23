import { NgModule } from '@angular/core';
import { SwiperModule } from './swiper/swiper.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  imports: [SwiperModule],
  exports: [SwiperModule, MaterialModule, FormsModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }],
})
export class SharedModule {}
