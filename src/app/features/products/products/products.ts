import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../../core/models/product.model';
import { AppState } from '../../../store/state/app.state';

import * as ProductActions from '../../../store/actions/product.actions';

import {
  selectProducts,
  selectLoading
} from '../../../store/selectors/product.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {

  products$: Observable<Product[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>,private router: Router) {
    this.products$ = this.store.select(selectProducts);
    this.loading$ = this.store.select(selectLoading);
  }

  viewProduct(id: number): void {
    this.router.navigate([`/products/${id}`]);
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