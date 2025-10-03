import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginEndpoint = 'http://localhost:8080/auth/login';
  
  constructor(private http:HttpClient) {}

  login(email:string, password:string) : Observable<Boolean> {
    const params = {
      'email':email,
      'password':password
    };
    return this.http.post<Boolean>(this.loginEndpoint, {params});
  }

}
