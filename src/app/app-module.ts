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

@NgModule({
  declarations: [
    App,
    Navbar,
    Dashboard,
    Home,
    Layout,
    Sidebar,
    Footer,
    Capitalize
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
