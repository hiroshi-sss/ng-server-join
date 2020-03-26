import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ITEMS } from '../item/itemList';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl = '/api/v1/items/';

  constructor(private http: HttpClient) { }

  getItem(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getFindId(itemId: string): Observable<any> {
    return this.http.get(this.apiUrl + itemId);
  }

}
