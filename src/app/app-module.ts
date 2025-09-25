import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Category } from './admin-components/category/category';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminLayout } from './_layouts/admin-layout/admin-layout';
import { MainLayout } from './_layouts/main-layout/main-layout';
import { Home } from './main-components/home/home';
import { Product } from './admin-components/product/product';
import { Slider } from './main-components/slider/slider';
import { Menu } from './main-components/menu/menu';

@NgModule({
  declarations: [
    App,
    Category,
    AdminLayout,
    MainLayout,
    Home,
    Product,
    Slider,
    Menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
