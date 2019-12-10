import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { Router } from '@angular/router';
import { SponsorserviceService } from '../service/sponsorservice.service';

@Component({
  selector: 'app-editsponsorname',
  templateUrl: './editsponsorname.component.html',
  styleUrls: ['./editsponsorname.component.css']
})
export class EditsponsornameComponent implements OnInit {
  sponsor:Sponsor = new Sponsor()

  name:string
  email:string

  constructor(private router: Router, private sponsorService:SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.name);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.sponsor.name = this.name;
    console.log(this.sponsor)

    this.sponsorService.changeSponsorName(this.sponsor, this.email).subscribe((reponse)=>{
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
