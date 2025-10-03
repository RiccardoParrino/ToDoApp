import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../service/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  email = '';
  name = '';
  surname = '';
  password = '';
  repeatedPassword = '';

  constructor (private loginService:LoginService, private router:Router) {}

  registerUser () : void {
    if (this.password !== this.repeatedPassword) {
      alert('Insert same password!');
      return;
    }

    const registrationDto = {
      'email':this.email,
      'name':this.name,
      'surname':this.surname,
      'password':this.password
    };
    this.loginService.register(registrationDto).subscribe ( response => {
      console.log("Registrazione riuscita");
      this.router.navigate(['login']);
    } );
  }
}
