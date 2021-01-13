import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/shared/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
@Input()
item:Item | undefined;

}
