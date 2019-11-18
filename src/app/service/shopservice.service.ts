import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopserviceService {

  constructor(private http: HttpClient) { }

  private ebayURL = 'https://www.ebay.com/';

  searcheBay() {
    console.log("calling ebay service");
    return this.http.get (this.ebayURL);
  }
}
