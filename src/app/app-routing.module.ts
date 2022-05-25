import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './cart/components/cart.component';

import { ContactComponent } from './pages/contact/contact.component';
import { DessartComponent } from './pages/desert/dessart.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMealComponent } from './pages/main-meal/main-meal.component';
import { MenuComponent } from './pages/menu/menu.component';
import { StarterComponent } from './pages/starter/starter/starter.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"menu", component:MenuComponent},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'starter',component:StarterComponent},
  {path:'main-meal', component:MainMealComponent},
  {path:'desert', component:DessartComponent},
  {path:'drinks',component:DrinksComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
