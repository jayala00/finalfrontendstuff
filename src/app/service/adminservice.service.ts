import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Admin} from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  private adminUrl = 'http://localhost:8080/admin';

  public createAdmin(admin) {
    return this.http.post<Admin>(this.adminUrl + '/addadmin', admin);
  }
}
