import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=[];

  addToCart(product){
    let daThem=false;
    for(let p of this.cart){
      if(p.Id==product.Id){
        p.amount++;
        daThem=true;
        break;
      }
    }

    if(daThem==false){
      product.amount=1;
      this.cart.push(product);
    }
    console.log(this.getCart())

  }
  getCart(){
    return this.cart;
  }

  get_cart_length(){
    return this.getCart().length;
  }
  constructor() { }
}
