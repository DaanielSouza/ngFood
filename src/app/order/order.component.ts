import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../model/Order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {

  constructor(private order: OrderService, private router: Router) { }
  cart: Order[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.cart = this.order.returnAll();
    this.total = this.order.returnTotal();
  }

  redirectToMenu() {
    this.router.navigate(["menu"]);
  }

  cleanService(){
    this.order.clean();
    this.total = this.order.returnTotal();
    this.cart = this.order.returnAll();
  }

  finishOrder(){
    alert("Pedido finalizado com sucesso!");
    this.cleanService();
    this.router.navigate(["menu"]);
  }

}
