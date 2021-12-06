import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API:any="http://localhost:8080/login";
  constructor(private httpClient:HttpClient) { }

  callLoginApi(user:any)
  {
     return this.httpClient.post(this.API,user);
  }
}
