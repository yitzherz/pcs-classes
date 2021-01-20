import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/shared/category';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent {
  @Input()
  categoryStock!: Category[];
  clicked: boolean = false;
  
  getList(index: number){
    this.clicked = !this.clicked;
  }
}
