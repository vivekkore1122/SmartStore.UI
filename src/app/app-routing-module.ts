import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { Layout } from './layout/layout/layout';

import { Home } from './features/home/home/home';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Products } from './features/products/products/products';
import { Categories } from './features/categories/categories/categories';
import { ProductDetails } from './features/products/product-details/product-details';
import { AddProduct } from './features/products/add-product/add-product';
import {AddCategory} from './features/categories/add-category/add-category';
import { Login } from './features/auth/login/login';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'products',
        component: Products,
        canActivate: [authGuard]
      },
      {
        path: 'products/add',
        component: AddProduct
      },
      {
        path: 'products/:id',
        component: ProductDetails,
        canActivate: [authGuard]
      },
      {
        path: 'categories',
        component: Categories,
        canActivate: [authGuard]
      },
      {
        path: 'categories/add',
        component:AddCategory
      },
      {
        path: 'login',
        component: Login
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }