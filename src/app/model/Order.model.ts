import { Food } from "./Food.model";

export class Order {
  food: Food;
  amount: number;

  constructor(f:Food){
    this.food = f;
    this.amount = 1;
  }
}
