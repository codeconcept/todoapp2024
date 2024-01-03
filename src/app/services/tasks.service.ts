import { Injectable, signal } from '@angular/core';
import Task from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasksSig = signal<Task[]>([
    {
      id: '1',
      taskName: 'Tâche pré-existante',
      taskDate: new Date(),
      done: false,
    }
  ]);

  createTask(taskName: string, taskDate: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      taskName,
      taskDate: new Date(taskDate),
      done: false,
    };
    this.tasksSig.update((tasks) => [newTask, ...tasks]);
    console.log(this.tasksSig());
  }

  readTasks(): Task[] {
    return this.tasksSig();
  }
}
