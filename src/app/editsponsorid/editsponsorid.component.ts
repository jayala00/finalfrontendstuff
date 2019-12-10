import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsor';
import { Router } from '@angular/router';
import { SponsorserviceService } from '../service/sponsorservice.service';

@Component({
  selector: 'app-editsponsorid',
  templateUrl: './editsponsorid.component.html',
  styleUrls: ['./editsponsorid.component.css']
})
export class EditsponsoridComponent implements OnInit {
  sponsor:Sponsor= new Sponsor()

  ID:Int16Array
  email:string

  constructor(private router: Router, private sponsorService:SponsorserviceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.ID);
    this.email = localStorage.getItem('token')
    console.log(this.email);


    this.sponsor.sponsorID = this.ID;
    console.log(this.sponsor)

    this.sponsorService.changeSponsorID(this.sponsor, this.email).subscribe((reponse)=>{
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
