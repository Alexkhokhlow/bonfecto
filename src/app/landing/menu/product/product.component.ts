import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() public product!: Product;
  @Output() public showInfo: EventEmitter<number> = new EventEmitter();

  onShowInfo() {
    this.showInfo.emit(this.product.id);
  }
}
