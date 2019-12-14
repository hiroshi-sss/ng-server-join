import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemModule } from './item/item.module';


const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
//   { path: 'detail', component: ItemDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ItemModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
