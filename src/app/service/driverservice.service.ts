import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Driver} from '../driver';

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
    return this.http.get<Driver[]>(this.driverUrl + '/getdrivers');
  }

  public deleteUser(driver) {
    return this.http.delete(this.driverUrl + "/"+ driver.id);
  }
}

