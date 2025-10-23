import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './tasklist/tasklist';
import { TaskFilterComponent } from './taskfilter/taskfilter';
import { TaskFormComponent } from './taskform/taskform';
import { TaskService } from './services/taskservice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskFilterComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [TaskService]
})
export class AppComponent {
  title = 'Task Manager';
  constructor(private taskService: TaskService) {}

  onAddTask(description: string) {
    this.taskService.addTask(description);
  }
}
