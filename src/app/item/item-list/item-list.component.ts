import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../itemList';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items;

  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
    // this.items =  this.itemService.getItem();
    const itemsObservable = this.itemService.getItem();
    itemsObservable.subscribe(
      (data) => {
        this.items = data;
      },
      (err) => { console.error(err) },
      () => { console.log('OK!!') }
    );
  }

}
