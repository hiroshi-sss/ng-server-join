import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITEMS } from '../itemList';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.item = ITEMS[+params.get('itemId')]
      }
    )
  }

}
