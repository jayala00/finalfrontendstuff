import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Sponsor} from '../sponsor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SponsorserviceService {

  constructor(private http:HttpClient) { }

  private sponsorUrl = 'http://localhost:8080/sponsor';

  public createSponsor(sponsor) {
    return this.http.post<Sponsor>(this.sponsorUrl + '/addsponsor', sponsor);
  }

  public getSponsor(email) {
    return this.http.get<Sponsor>(this.sponsorUrl + '/getSponsor/' + email);
  }

  public registerSponsor(sponsor) {
    return this.http.post<Sponsor>(this.sponsorUrl + "/registersponsor/", sponsor);
  }

  public changeSponsorPassword(sponsor,email){

    return this.http.post(this.sponsorUrl + '/changepassword/' + email ,sponsor, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeSponsorEmail(sponsor,email){

    return this.http.post(this.sponsorUrl + '/changeemail/' + email ,sponsor, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeSponsorName(sponsor,email){

    return this.http.post(this.sponsorUrl + '/changename/' + email ,sponsor, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeSponsorAddress(sponsor,email){

    return this.http.post(this.sponsorUrl + '/changeaddress/' + email ,sponsor, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeSponsorID(sponsor,email){

    return this.http.post(this.sponsorUrl + '/changeid/' + email ,sponsor, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }
}
