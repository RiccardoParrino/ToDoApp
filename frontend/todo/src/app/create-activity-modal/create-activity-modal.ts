import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-activity-modal',
  imports: [],
  templateUrl: './create-activity-modal.html',
  styleUrl: './create-activity-modal.css'
})
export class CreateActivityModal {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
