import { Injectable } from '@angular/core';
import { Food } from './model/Food.model';
import { Order } from './model/Order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }

  cart: Order[] = [];

  save(f: Food) {
    let validador = false;

    this.cart.forEach(e => {
      if (e.food == f) {
        validador = true;
        e.amount++;
      }
    })

    if (!validador) {
      this.cart.push(new Order(f))
    }
  }

  returnTotal() {
    let total = 0;
    this.cart.forEach(e => {
      total += e.amount * e.food.price;
    });

    return total;
  }

  clean(){
    this.cart = [];
  }

  returnAll() {
    return this.cart;
  }
}
