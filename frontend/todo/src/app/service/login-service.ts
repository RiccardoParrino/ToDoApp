import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginEndpoint = 'http://localhost:8080/login/loginUser';
  
  constructor(private http:HttpClient) {}

  login(email:string, password:string) : Observable<LoginDTO> {
    const params = {
      'email':email,
      'password':password
    };
    return this.http.post<LoginDTO>(this.loginEndpoint, params);
  }

  getAccessToken() : string | null {
    return localStorage.getItem('todolist-access-token');
  }

  storeAccessToken(token:string) : void {
    localStorage.setItem('todolist-access-token', token);
  }

  isLogged() : boolean {
    return localStorage.getItem('todolist-access-token') !== undefined;
  }

  removeAccessToken() : void {
    localStorage.removeItem('todolist-access-token');
  }
}
