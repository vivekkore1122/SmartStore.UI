import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {

  @Input()
  product!: Product;

  @Output()
  delete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.product.id);
  }
}