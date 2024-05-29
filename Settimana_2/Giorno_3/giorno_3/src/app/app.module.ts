import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeProductComponent } from './Pages/home-product/home-product.component';
import { FavouriteProductComponent } from './Pages/favourite-product/favourite-product.component';
import { NavbarComponent } from './Componenti/navbar/navbar.component';
import { FooterComponent } from './Componenti/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({

  declarations: [
    AppComponent,
    HomeProductComponent,
    FavouriteProductComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
