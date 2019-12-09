import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../admin';
import { Sponsor } from '../sponsor';

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  constructor(private http: HttpClient) { }

  private adminUrl = 'http://localhost:8080/admin';
  private sponsorUrl = 'http://localhost:8080/sponsor';

  public getAdmins() {
    return this.http.get<Admin[]>(this.adminUrl + '/getalladmin');
  }

  public getSponsors() {
    return this.http.get<Sponsor[]>(this.sponsorUrl + '/getallsponsors');
  }

  public deleteAdmin(id) {
    return this.http.delete(this.adminUrl + "/deleteadmin/"+ id);
  }

  public deleteSponsor(sponsorID) {
    return this.http.delete(this.adminUrl + "/deletesponsor/" + sponsorID );
  }

  public registerAdmin(admin) {
    return this.http.post<Admin>(this.adminUrl + "/registeradmin/", admin);
  }
}
