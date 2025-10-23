import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './taskform.html',
  styleUrls: ['./taskform.css']
})
export class TaskFormComponent {
  @Output() add = new EventEmitter<string>();
  newTask = '';

  addTask() {
    const trimmed = this.newTask.trim();
    if (trimmed) {
      this.add.emit(trimmed);
      this.newTask = '';
    }
  }
}
