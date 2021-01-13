import { Component } from '@angular/core';
import { Item } from 'src/shared/item';
import { Order } from 'src/shared/order';
import { Person } from '../shared/person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hw-app';

  person: Person = {
    firstName: 'Donald',
    lastName: 'Trump',

    address: {
      street: '123 Any Street',
      city: 'Somewhere',
      state: 'Florida',
      zip: '12345'
    }
  };

  item: Item ={
    name: 'pizza',
    price: 3.50
  }

  order: Order ={
    name: this.person,
    date: 'toady',
    item: this.item
  }


}
