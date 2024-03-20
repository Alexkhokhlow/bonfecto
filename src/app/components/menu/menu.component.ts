import { Component } from '@angular/core';
import product from 'src/app/interfaces/interfaces';
import { productInfo } from 'src/app/data/productData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public windowInfo!: product;
  public infoWindowState = false;
  public menuItems = productInfo;

  public showInfo(id: number) {
    this.windowInfo = this.menuItems[id];
    this.infoWindowState = true;
  }

  public hideInfo(event: Event) {
    if (
      (event.target && (event.target as Element).className === 'window') ||
      (event.target as Element).className === 'window-closer'
    ) {
      this.infoWindowState = false;
    }
  }
}
