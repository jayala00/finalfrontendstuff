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

  public getAdmins() {
    return this.http.get<Admin[]>(this.adminUrl + '/getalladmin');
  }

  public getSponsors() {
    return this.http.get<Sponsor[]>(this.adminUrl + '/getallsponsors');
  }

  public deleteAdmin(admin) {
    return this.http.delete(this.adminUrl + "/deleteadmin"+ admin.id);
  }

  public deleteSponsor(sponsor) {
    return this.http.delete(this.adminUrl + "/deletesponsor" + sponsor.id );
  }
}
