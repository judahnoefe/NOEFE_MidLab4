import { Injectable, EventEmitter } from '@angular/core';
import { Task } from '../models/taskdatamodel';

export type TaskFilter = 'all' | 'completed' | 'pending';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private filter: TaskFilter = 'all';
  private nextId = 1;

  filterChanged = new EventEmitter<TaskFilter>();

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(description: string) {
    const trimmed = description.trim();
    if (trimmed) {
      this.tasks.push(new Task(this.nextId++, trimmed));
    }
  }

  editTask(id: number, newDescription: string) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.description = newDescription.trim();
    }
  }

  toggleComplete(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.isCompleted = !task.isCompleted;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  setFilter(filter: TaskFilter) {
    this.filter = filter;
    this.filterChanged.emit(filter);
  }

  getFilteredTasks(): Task[] {
    if (this.filter === 'completed') {
      return this.tasks.filter(t => t.isCompleted);
    } else if (this.filter === 'pending') {
      return this.tasks.filter(t => !t.isCompleted);
    }
    return this.tasks;
  }

  getRemainingCount(): number {
    return this.tasks.filter(t => !t.isCompleted).length;
  }
}
