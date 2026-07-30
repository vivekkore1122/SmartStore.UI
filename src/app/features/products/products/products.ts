import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../../core/models/product.model';
import { AppState } from '../../../store/app.state';

import * as ProductActions from '../../../store/actions/product.actions';

import {
  selectProducts,
  selectLoading
} from '../../../store/selectors/product.selectors';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {

  products$: Observable<Product[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(selectProducts);
    this.loading$ = this.store.select(selectLoading);
  }

  deleteProduct(id: number): void {

    console.log('Delete Product Id :', id);

    // Later:
    // this.productService.deleteProduct(id).subscribe(...)
  }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }
}