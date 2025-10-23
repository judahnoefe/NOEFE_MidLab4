import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, TaskFilter } from '../services/taskservice';

@Component({
  selector: 'task-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskfilter.html',
  styleUrls: ['./taskfilter.css']
})
export class TaskFilterComponent {
  currentFilter: TaskFilter = 'all';

  constructor(private taskService: TaskService) {}

  setFilter(filter: TaskFilter) {
    this.currentFilter = filter;
    this.taskService.setFilter(filter);
  }

  get remainingCount() {
    return this.taskService.getRemainingCount();
  }
}
