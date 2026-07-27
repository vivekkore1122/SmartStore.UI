import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideHttpClient,withInterceptorsFromDi} from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './layout/navbar/navbar';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Home } from './features/home/home/home';
import { Layout } from './layout/layout/layout';
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';
import { Capitalize } from './shared/pipes/capitalize-pipe';
import { Products } from './features/products/products/products';
import { Categories } from './features/categories/categories/categories';
import { ProductDetails } from './features/products/product-details/product-details';
import { AddProduct } from './features/products/add-product/add-product';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCategory } from './features/categories/add-category/add-category';

@NgModule({
  declarations: [
    App,
    Navbar,
    Dashboard,
    Home,
    Layout,
    Sidebar,
    Footer,
    Capitalize,
    Products,
    Categories,
    ProductDetails,
    AddProduct,
    AddCategory
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideHttpClient(
      withInterceptorsFromDi()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
