import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { ProductEffects } from './store/effects/product.effects';
import { MaterialModule } from './shared/material/material.module';
import { AppCardComponent  } from './shared/components/app-card/app-card';
import { ProductCardComponent } from './shared/components/product-card/product-card';
import { Login } from './features/auth/login/login';
import {HttpClient, provideHttpClient,withInterceptors} from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth-interceptor';
import { QRCodeComponent } from 'angularx-qrcode';
import {TranslateLoader,TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CategoryEffects } from './store/effects/category.effects';
//import { AboutSmartstore } from './features/about/about-smartstore/about-smartstore';
import { AboutSmartStore } from './features/about/about-smartstore/about-smartstore';


  
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

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
    AddCategory,
    AppCardComponent,
    ProductCardComponent,
    Login,
    AboutSmartStore
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

    TranslateModule.forRoot({

    defaultLanguage: 'en',

    loader: {

      provide: TranslateLoader,

      useFactory: HttpLoaderFactory,

      deps: [HttpClient]

    }

    }),


    QRCodeComponent,

    StoreModule.forRoot(reducers),

    EffectsModule.forRoot([
      ProductEffects,
      CategoryEffects
    ]),

    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),

    
  ],

  

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    )

  ],
  bootstrap: [App]
})
export class AppModule { }
