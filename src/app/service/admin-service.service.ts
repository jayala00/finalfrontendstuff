import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private adminUrls: string;

  constructor(private http: HttpClient) { 
    this.adminUrls = 'http://localhost:8080/admin';
  }

}
