import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../model/Food.model';
import { Order } from '../model/Order.model';
import { OrderService } from "../order.service"

const urlBase: string = "http://localhost:3000/products";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  menu: Food[] = [];
  categorys: string[] = [];
  cart: Order[] = [];
  total: number = 0;

  constructor(private httpClient: HttpClient, private order: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get<Food[]>(urlBase)
      .subscribe(e => {
        this.menu = e;
        e.forEach(i => {
          if (this.categorys.indexOf(i.category) == -1) {
            this.categorys.push(i.category);
          }
        });
      });

    setTimeout(this.deleteDivs, 1000);
  }

  deleteDivs() {
    let aux: HTMLCollection = document.getElementsByClassName("deletar");

    for (let i = aux.length - 1; i > 0; i--) {
      aux[i].remove();
    }
  }

  addFood(item: Food) {
    this.order.save(item);
    this.cart = this.order.returnAll();
    this.total = this.order.returnTotal();
  }

  redirectToCart() {
    this.router.navigate(["order"])
  }

}
