import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/shared/item';

import { Order } from 'src/shared/order';
import { Person} from 'src/shared/person';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input()
  person: Person | undefined;
  @Input()
  order: Order | undefined;
  @Input()
  item: Item | undefined;
}
