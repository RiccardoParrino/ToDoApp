import { Component } from '@angular/core';
import { LoginService } from '../service/login-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  isLoggedIn : boolean = false;

  constructor(private loginService:LoginService) {}

  login() {
    console.log(this.email);
    console.log(this.password);
    this.loginService.login(this.email, this.password).subscribe( response => {
      this.loginService.storeAccessToken(response.token);
      this.isLoggedIn = true;
    });
  }

}
