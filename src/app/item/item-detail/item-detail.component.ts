import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITEMS } from '../itemList';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        // this.item = ITEMS[+params.get('itemId')]
        this.item = this.itemService.getFindId(+params.get('itemId'));
      }
    )
  }

}
