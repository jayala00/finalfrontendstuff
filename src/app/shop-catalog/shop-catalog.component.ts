import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-shop-catalog',
  templateUrl: './shop-catalog.component.html',
  styleUrls: ['./shop-catalog.component.css']
})
export class ShopCatalogComponent implements OnInit {

  constructor(private http:HttpClient) { }

  url:string

  ngOnInit() {
    //this.url = 'https://www.ebay.com/itm/PUMA-Drift-Cat-7S-Ultra-Mens-Shoes-Men-Shoe-Basics/273990412684?_trkparms=pageci%3Ae412d44e-1ac5-11ea-89fe-74dbd1801d2d%7Cparentrq%3Aec6fd5aa16e0acc6ecd24c26ffe76a5c%7Ciid%3A1';
    //this.http.get(this.url).subscribe(root => console.log(root));
  }

  addCart() {
    
  }

}
