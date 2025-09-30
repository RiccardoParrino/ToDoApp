import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Title } from './title/title';
import { Activity } from './activity/activity';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Title, Activity],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
}
