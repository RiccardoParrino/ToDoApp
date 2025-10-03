import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/login.dto';
import { RegistrationDTO } from '../dto/registration.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginEndpoint = 'http://localhost:8080/login/loginUser';
  registrationEndpoint = 'http://localhost:8080/login/createUser';
  
  constructor(private http:HttpClient) {}

  login(email:string, password:string) : Observable<LoginDTO> {
    const params = {
      'email':email,
      'password':password
    };
    return this.http.post<LoginDTO>(this.loginEndpoint, params);
  }

  register(registrationDto:RegistrationDTO) : Observable<any> {
    console.log(registrationDto);
    return this.http.post<any>(this.registrationEndpoint, registrationDto);
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
