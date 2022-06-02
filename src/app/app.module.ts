import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';

import { HeaderComponent } from './sharepage/header/header.component';
import { StarterComponent } from './pages/starter/starter/starter.component';
import { MainMealComponent } from './pages/main-meal/main-meal.component';
import { DessartComponent } from './pages/desert/dessart.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { CartComponent } from './cart/components/cart.component';

import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { AddProductComponent } from './cart/components/add-product/add-product.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    
    HeaderComponent,
    StarterComponent,
    MainMealComponent,
    DessartComponent,
    DrinksComponent,
    CartComponent,
    
    CartItemComponent,
         AddProductComponent,
   
  
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
