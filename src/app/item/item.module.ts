import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { ItemService } from '../service/item.service';

const routes: Routes = [
  {
    path: 'items', component: ItemComponent,
    children: [
      { path: '', component: ItemListComponent },
      { path: ':itemId', component: ItemDetailComponent },
    ]
  }
];

@NgModule({
  declarations: [
    ItemDetailComponent,
    ItemListComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ItemService,
  ]
})

export class ItemModule { }
