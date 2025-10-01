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
    this.readActivities();
  }

  private readActivities() : void {
    this.activities = [];
    this.activityService.readActivity().subscribe( data => {
      data.forEach ( a => this.activities.push(new ActivityModel(
        a.name,
        a.date,
        a.description,
        a.city
      )));
    });
  }
}
