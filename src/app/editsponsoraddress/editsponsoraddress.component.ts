import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { SponsorserviceService } from '../service/sponsorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editsponsoraddress',
  templateUrl: './editsponsoraddress.component.html',
  styleUrls: ['./editsponsoraddress.component.css']
})
export class EditsponsoraddressComponent implements OnInit {
  sponsor: Sponsor = new Sponsor()

  address:string
  email:string

  constructor(private router: Router, private sponsorService:SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.address);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.sponsor.address = this.address;
    console.log(this.sponsor)

    this.sponsorService.changeSponsorAddress(this.sponsor, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

    this.router.navigate(['/managesponsoraccount']);
  }

  onCancel(){
    this.router.navigate(['/managesponsoraccount'])
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/actuallogin'])
  }
}
