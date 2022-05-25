import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  quantity: number | undefined
  
  products: Product[] =[]
  constructor( ) { }

  getProduct(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
 
  
  // addProduct()



  foodDetails = [
    
    {
      id:1,
      foodName:"Starters",
      foodImg:"https://us.123rf.com/450wm/kolotype/kolotype1904/kolotype190400064/121294673-bowl-of-tasty-broccoli-and-spinach-soup-with-a-second-bowl-of-butternut-or-pumpkin-soup-behind-on-a-.jpg?ver=6"
      
    },
      {
        id:2,
        foodName:"Main Meals",
        foodImg:"https://c4.wallpaperflare.com/wallpaper/587/703/588/plate-food-potatoes-ketchup-wallpaper-preview.jpg"
      },
      {
        id:3,
        foodName:"Deserts",
        foodImg:"http://adwallpapers.xyz/uploads/posts/73155-meringue-strawberries-berries-dessert-4k-ultra-hd-wallpaper__other.jpg"
      },
      {
        id:4,
        foodName:"Drinks",
        foodImg:"https://media.istockphoto.com/photos/pour-soft-drink-in-glass-with-ice-splash-on-dark-background-picture-id1062831310?b=1&k=20&m=1062831310&s=170667a&w=0&h=LZlme3y6aUiO7z__PMQNj1Zikfd2vs8UimNlzhroewQ="
      },
     
    ]
  
}
