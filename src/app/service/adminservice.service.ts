import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Admin} from '../admin';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  private adminUrl = 'http://localhost:8080/admin';

  public createAdmin(admin) {
    return this.http.post<Admin>(this.adminUrl + '/addadmin', admin);
  }

  public getAdmin(email) {
    return this.http.get<Admin>(this.adminUrl + '/getAdmin/' + email);
  }

  public changeAdminPassword(driver,email){

    return this.http.post(this.adminUrl + '/changepassword/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeAdminEmail(driver,email){

    return this.http.post(this.adminUrl + '/changeemail/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeAdminFirstname(driver,email){

    return this.http.post(this.adminUrl + '/changefirstname/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeAdminLastname(driver,email){

    return this.http.post(this.adminUrl + '/changelastname/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeAdminAddress(driver,email){

    return this.http.post(this.adminUrl + '/changeaddress/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeAdminID(driver,email){

    return this.http.post(this.adminUrl + '/changeid/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }
}
