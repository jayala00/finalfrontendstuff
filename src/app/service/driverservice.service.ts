import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Driver} from '../driver';
import { DriverProfile } from '../driver-profile';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DriverserviceService {

  constructor(private http:HttpClient) { }

  private driverUrl = 'http://localhost:8080/driver';

  public createDriver(driver) {
    return this.http.post<Driver>(this.driverUrl + '/adddrivers', driver);
  }

  public getUsers() {
    return this.http.get<Driver[]>(this.driverUrl + '/getalldrivers');
  }

  public deleteUser(id) {
    return this.http.delete(this.driverUrl + "/deletedriver/"+ id);
  }

  public getDriver (email) {
    return this.http.get<Driver>(this.driverUrl + '/getDriver/' + email);
  }

  public getDriverProfile (email) {
    return this.http.get<DriverProfile[]>(this.driverUrl + '/getDriverProfile/' + email);
  }

  public addDriverPoints(driver,email){

    return this.http.post(this.driverUrl + '/addpoints/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeDriverPassword(driver,email){

    return this.http.post(this.driverUrl + '/changepassword/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeDriverEmail(driver,email){

    return this.http.post(this.driverUrl + '/changeemail/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeDriverFirstname(driver,email){

    return this.http.post(this.driverUrl + '/changefirstname/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeDriverLastname(driver,email){

    return this.http.post(this.driverUrl + '/changelastname/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeDriverAddress(driver,email){

    return this.http.post(this.driverUrl + '/changeaddress/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public changeDriverDriverID(driver,email){

    return this.http.post(this.driverUrl + '/changedriverid/' + email ,driver, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data =>
     data));
  }

  public registerDriver(driver) {
    return this.http.post<Driver>(this.driverUrl + "/registerdriver/", driver);
  }
}

