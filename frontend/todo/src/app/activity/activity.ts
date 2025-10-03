import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../model/ActivityModel';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../service/activity-service';
import { UpdateActivityModal } from '../update-activity-modal/update-activity-modal';

@Component({
  selector: 'app-activity',
  imports: [CommonModule, UpdateActivityModal],
  templateUrl: './activity.html',
  styleUrl: './activity.css'
})
export class Activity implements OnInit{
  activities: ActivityModel[] = [];
  showUpdateModal:boolean = false;
  currentSelectedActivityName: string = '';
  currentSelectedActivityDescription: string = '';

  constructor(private activityService:ActivityService) {}

  ngOnInit(): void {
    this.readActivities();
    this.activityService.message$.subscribe(message => {
      this.readActivities();
    })
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

  protected openActivity(activityName: string, activityDescription: string) : void {
    this.currentSelectedActivityName = activityName;
    this.currentSelectedActivityDescription = activityDescription;
    this.showUpdateModal = true;
  }

  protected saveOnCloseUpdateModal(data:any) : void {
    console.log("saveOnCloseUpdateModal");
    console.log(data);

    if (data !== undefined) {
      const updatedActivity = {
        'name':this.currentSelectedActivityName,
        'newName':data.newName,
        'newDescription':data.newDescription,
        'newDate':'todo',
        'newCity':'todo'
      }
    
      this.activityService.updateActivity(updatedActivity).subscribe ( data => {
        console.log("Operazione riuscita!");
        this.readActivities();
      });
    }

    this.currentSelectedActivityName = '';
    this.currentSelectedActivityDescription = '';
    this.showUpdateModal = false;
    // this.activityService.updateActivity()
  }

  protected removeActivity(activityName: string) : void {
    this.activityService.deleteActivity(activityName).subscribe( response => {
      console.log("Activity deleted successfully");
      this.readActivities();
    } );
  }
}
