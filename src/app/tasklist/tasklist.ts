import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Task } from '../models/taskdatamodel';
import { TaskService } from '../services/taskservice';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  editingId: number | null = null;
  editText = '';
  private filterSub!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.refreshTasks();

    this.filterSub = this.taskService.filterChanged.subscribe(() => {
      this.refreshTasks();
    });
  }

  ngOnDestroy(): void {
    if (this.filterSub) {
      this.filterSub.unsubscribe();
    }
  }

  refreshTasks() {
    this.tasks = this.taskService.getFilteredTasks();
  }

  startEdit(task: Task) {
    this.editingId = task.id;
    this.editText = task.description;
  }

  saveEdit(task: Task) {
    const newDesc = this.editText.trim();
    if (newDesc && newDesc !== task.description) {
      this.taskService.editTask(task.id, newDesc);
    }
    this.cancelEdit();
    this.refreshTasks();
  }

  cancelEdit() {
    this.editingId = null;
    this.editText = '';
  }

  onKeydown(event: KeyboardEvent, task: Task) {
    if (event.key === 'Enter') this.saveEdit(task);
    if (event.key === 'Escape') this.cancelEdit();
  }

  toggleComplete(task: Task) {
    this.taskService.toggleComplete(task.id);
    this.refreshTasks();
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
    this.refreshTasks();
  }
}
