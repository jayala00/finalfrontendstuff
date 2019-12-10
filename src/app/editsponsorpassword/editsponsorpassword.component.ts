import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { Router } from '@angular/router';
import { SponsorserviceService } from '../service/sponsorservice.service';

@Component({
  selector: 'app-editsponsorpassword',
  templateUrl: './editsponsorpassword.component.html',
  styleUrls: ['./editsponsorpassword.component.css']
})
export class EditsponsorpasswordComponent implements OnInit {
  sponsor: Sponsor = new Sponsor()

  password:string
  email:string

  constructor(private router: Router, private sponsorService:SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.password);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.sponsor.password = this.password;
    console.log(this.sponsor)

    this.sponsorService.changeSponsorPassword(this.sponsor, this.email).subscribe((reponse)=>{
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
