import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateActivityModal } from '../create-activity-modal/create-activity-modal';
import { ActivityService } from '../service/activity-service';

@Component({
  selector: 'app-create-activity',
  imports: [CommonModule, CreateActivityModal],
  templateUrl: './create-activity.html',
  styleUrl: './create-activity.css'
})
export class CreateActivity {
  showModal:boolean = false;

  constructor(private activityService:ActivityService) {}

  openModal() : void {
    console.log("opening modal");
    this.showModal = true;
  }

  saveOnCloseModal(data:any) : void {
    console.log("save on closing modal");
    console.log(data);
    if (data !== undefined) {
      const newActivity = {
        name:data.name,
        date:"todo",
        description:data.description,
        city:"todo"
      };
      console.log(newActivity);
      this.activityService.createActivity(newActivity).subscribe ( data => {
        console.log("Operazione riuscita!");
        this.activityService.sendMessage(true);
      } );
    }
    this.showModal = false;
  }
}
