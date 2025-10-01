import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateActivityModal } from '../create-activity-modal/create-activity-modal';

@Component({
  selector: 'app-create-activity',
  imports: [CommonModule, CreateActivityModal],
  templateUrl: './create-activity.html',
  styleUrl: './create-activity.css'
})
export class CreateActivity {
  showModal:boolean = false;

  openModal() : void {
    console.log("opening modal");
    this.showModal = true;
  }

  closeModal() : void {
    console.log("closing modal");
    this.showModal = false;
  }
}
