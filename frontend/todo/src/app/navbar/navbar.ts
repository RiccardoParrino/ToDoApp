import { Component } from '@angular/core';
import { LoginService } from '../service/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(private loginService:LoginService, private router:Router) {}

  logout() {
    this.loginService.removeAccessToken();
    this.router.navigate(['login']);
  }

}
