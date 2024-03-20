import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { MenuComponent } from './components/menu/menu.component';
import { WindowComponent } from './components/menu/window/window.component';
import { SwiperComponent } from './components/common/swiper/swiper.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/menu/product/product.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WindowComponent,
    SwiperComponent,
    HeaderComponent,
    ProductComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
