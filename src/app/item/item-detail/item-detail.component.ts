import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        const itemsObservable = this.itemService.getFindId(params.get('itemId'));
        itemsObservable.subscribe(
          (data) => {
            this.item = data;
          },
          (err) => { console.error(err) },
          () => { console.log('OK!!') }
        )
      }
    )
  }

}
