import { Component } from '@angular/core';
import { LoginService } from '../service/login-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';

  constructor(private loginService:LoginService, private router:Router) {}

  login() {
    console.log(this.email);
    console.log(this.password);
    this.loginService.login(this.email, this.password).subscribe( response => {
      this.loginService.storeAccessToken(response.token);
      this.router.navigate(['home']);
    });
  }

}
