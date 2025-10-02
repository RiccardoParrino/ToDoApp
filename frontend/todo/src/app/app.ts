import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Title } from './title/title';
import { Activity } from './activity/activity';
import { Footer } from './footer/footer';
import { CreateActivity } from './create-activity/create-activity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Title, Activity, Footer, CreateActivity, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
  isLoggedIn:boolean = false;
}
