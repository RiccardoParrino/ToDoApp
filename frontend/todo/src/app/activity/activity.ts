import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../model/ActivityModel';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../service/activity-service';

@Component({
  selector: 'app-activity',
  imports: [CommonModule],
  templateUrl: './activity.html',
  styleUrl: './activity.css'
})
export class Activity implements OnInit{
  activities: ActivityModel[] = [];

  constructor(private activityService:ActivityService) {}

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
