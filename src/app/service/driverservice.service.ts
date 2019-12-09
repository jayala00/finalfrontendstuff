import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Driver} from '../driver';
import { DriverProfile } from '../driver-profile';
import { empty } from 'rxjs';

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

  public addDriverPoints(email, driver) {
    return this.http.post(this.driverUrl + "/addpoints/" + email, driver);
  }

  public registerDriver(driver) {
    return this.http.post<Driver>(this.driverUrl + "/registerdriver/", driver);
  }
}

