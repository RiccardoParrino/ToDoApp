import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../model/ActivityModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  imports: [CommonModule],
  templateUrl: './activity.html',
  styleUrl: './activity.css'
})
export class Activity implements OnInit{
  activities: ActivityModel[] = [];

  ngOnInit(): void {
    this.activities.push(
      new ActivityModel("Clean room", "today", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean car", "today", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean PC", "Yesterday", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean room", "today", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean car", "today", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean PC", "Yesterday", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean room", "today", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean car", "today", "description goes here")
    );
    this.activities.push(
      new ActivityModel("Clean PC", "Yesterday", "description goes here")
    );  
  }
}
