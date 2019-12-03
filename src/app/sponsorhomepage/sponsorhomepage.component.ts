import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopserviceService } from '../service/shopservice.service';

@Component({
  selector: 'app-sponsorhomepage',
  templateUrl: './sponsorhomepage.component.html',
  styleUrls: ['./sponsorhomepage.component.css']
})
export class SponsorhomepageComponent implements OnInit {

  constructor(private router: Router, private shopService:ShopserviceService) { }

  ngOnInit() {
  }

  onManageAccount() {
    this.router.navigate(['/managesponsoraccount'])
  }

  onViewCatalog() {
    this.shopService.searcheBay
  }

}