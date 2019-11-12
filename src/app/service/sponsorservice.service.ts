import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Sponsor} from '../sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorserviceService {

  constructor(private http:HttpClient) { }

  private sponsorUrl = 'http://localhost:8080/sponsor';

  public createSponsor(sponsor) {
    return this.http.post<Sponsor>(this.sponsorUrl + '/addsponsor', sponsor);
  }
}
