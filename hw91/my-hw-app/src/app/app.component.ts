import { Component } from '@angular/core';
import { Category } from 'src/shared/category';
import { Item } from 'src/shared/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'my-hw-app';
  rolex: Item = {
    name: 'rolex',
    price: 300
  }
  longene: Item = {
    name: 'longene',
    price: 3000
  }
  borsalino: Item = {
    name: 'borsalino',
    price: 250
  }
  trionfo: Item = {
    name: 'trionfo',
    price: 350
  }

  watches: Category = {
    categoryType: 'watches',
    categoryItems: [this.rolex, this.longene]
  }
  hats: Category = {
    categoryType: 'hats',
    categoryItems: [this.borsalino, this.trionfo]
  }
  suits: Category = { categoryType: 'suits' }
  
  categoryStock: Category[] = [this.watches, this.hats, this.suits];
}
