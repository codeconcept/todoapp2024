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
    },
    {
      id: '2',
      taskName: 'Tâche pré-existante bis',
      taskDate: new Date('2024-03-1'),
      done: true,
    },
    {
      id: '3',
      taskName: 'Et de trois',
      taskDate: new Date('2024-03-15'),
      done: false,
    },
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

  updateTaskStatus(status: boolean, id: string): void {
    // console.log(`le service a reçu ${status} et ${id}`);
    this.tasksSig.update((tasks) =>
      tasks.map((t) => (t.id !== id ? t : { ...t, done: status }))
    );
  }
}
