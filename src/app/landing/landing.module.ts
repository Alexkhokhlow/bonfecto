import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MenuComponent } from './menu/menu.component';
import { WindowComponent } from './menu/window/window.component';
import { ProductComponent } from './menu/product/product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InfoComponent,
    LandingComponent,
    MenuComponent,
    WindowComponent,
    ProductComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
