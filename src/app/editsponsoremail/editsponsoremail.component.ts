import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { Router } from '@angular/router';
import { SponsorserviceService } from '../service/sponsorservice.service';

@Component({
  selector: 'app-editsponsoremail',
  templateUrl: './editsponsoremail.component.html',
  styleUrls: ['./editsponsoremail.component.css']
})
export class EditsponsoremailComponent implements OnInit {
  sponsor: Sponsor = new Sponsor()

  newemail:string
  email:string

  constructor(private router: Router, private sponsorService: SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.newemail);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.sponsor.email = this.newemail;
    console.log(this.sponsor)

    this.sponsorService.changeSponsorEmail(this.sponsor, this.email).subscribe((reponse)=>{
      console.log(reponse);
     }); 

     localStorage.setItem('token',this.newemail)

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
