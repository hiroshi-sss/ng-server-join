import { Injectable } from '@angular/core';
import { ITEMS } from '../item/itemList';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItem() {
    return ITEMS;
  }

  getFindId(itemId: number) {
    return ITEMS[itemId];
  }

}
