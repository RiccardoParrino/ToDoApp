import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Activity } from '../activity/activity';
import { CreateActivity } from '../create-activity/create-activity';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { Title } from '../title/title';

@Component({
  selector: 'app-home',
  imports: [Navbar, Title, Activity, Footer, CreateActivity, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
