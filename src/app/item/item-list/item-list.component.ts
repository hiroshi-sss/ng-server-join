import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../itemList';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
