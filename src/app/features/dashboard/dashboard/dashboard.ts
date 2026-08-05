import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
//import { DashboardService } from '../../../core/services/dashboard.service';
import { DashboardResponse } from '../../../core/models/dashboard.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../../core/models/product.model';
import { AppState } from '../../../store/state/app.state';

import * as ProductActions from '../../../store/actions/product.actions';

import { selectProducts } from '../../../store/selectors/product.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard implements OnInit {

  today = new Date();

  greeting = '';

  quote = 'Have a productive day managing your inventory!';

  constructor(
    private store: Store<AppState>
  ) {
    this.products$ = this.store.select(selectProducts);
  }

  applicationName = 'InventoryPro';
  userName = 'Admin';
  isLoggedIn = true;
  products$: Observable<Product[]>;

  totalProducts = 0;

  totalCategories = 0;

  inventoryValue = 0;

  lowStockProducts = 0;

  ngOnInit(): void {

    this.store.dispatch(ProductActions.loadProducts());

    this.products$.subscribe(products => {

      console.log('Products From Store:', products);

      this.totalProducts = products.length;

      this.totalCategories = new Set(
        products.map(product => product.category)
      ).size;

      this.inventoryValue = products.reduce((total, product) => { return total + (product.price * product.quantity); }, 0);

      this.lowStockProducts = products.filter(product => product.quantity < 10).length;

    });

    this.setGreeting();

  }

  private setGreeting(): void {

    const hour = new Date().getHours();

    if (hour < 12) {

      this.greeting = 'Good Morning';

    }

    else if (hour < 17) {

      this.greeting = 'Good Afternoon';

    }

    else {

      this.greeting = 'Good Evening';

    }

  }

  // private loadDashboard(): void {

  //   this.store.select(selectDashboard).subscribe({

  //     next: (response) => {

  //       console.log('Dashboard Response:', response);

  //       this.dashboard = response;

  //     },

  //     error: (error) => {

  //       console.error('Error loading dashboard:', error);

  //     }

  //   });

  // }


}