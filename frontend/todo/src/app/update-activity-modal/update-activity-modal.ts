import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-activity-modal',
  imports: [FormsModule],
  templateUrl: './update-activity-modal.html',
  styleUrl: './update-activity-modal.css'
})
export class UpdateActivityModal {
  @Output() close = new EventEmitter<object>();
  @Input() name:string = '';
  @Input() description:string = '';

  onClose() {
    this.close.emit(undefined);
  }

  saveOnClose() {
    this.close.emit({"newName":this.name,"newDescription":this.description});
  }
}
