import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  constructor(private http: HttpClient) { }

  private adminUrl = 'http://localhost:8080/driver';

}
