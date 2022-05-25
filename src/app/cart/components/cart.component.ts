import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any 
  
  total: number = 0
  
  constructor( private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.getCart()
    
    console.log(this.cart)
  }

  getCart() {
    this.cart = JSON.parse(`${localStorage.getItem('cart')}`) ?
    JSON.parse(`${localStorage.getItem('cart')}`) : []
    this.totalCost()
  }

  

  totalCost(){
    this.cart.map( (elem: any) => {
      if(elem.quantity) this.total += elem.price*elem.quantity
    })
    console.log(`this is total of ${this.total}`)
  }

  checkout(){
    this.router.navigate(['contact'])
    alert(`Thank you for visiting us, your total price it: R ${this.total}`)
    localStorage.removeItem('cart')
    
  }

}

