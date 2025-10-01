import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-activity-modal',
  imports: [FormsModule],
  templateUrl: './create-activity-modal.html',
  styleUrl: './create-activity-modal.css'
})
export class CreateActivityModal {
  @Output() close = new EventEmitter<object>();
  name:string = '';
  description:string = '';

  onClose() {
    this.close.emit(undefined);
  }

  saveOnClose() {
    this.close.emit({"name":this.name,"description":this.description});
  }
}
