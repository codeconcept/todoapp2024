import { Component, Input, signal } from '@angular/core';
import Task from '../../interfaces/task';
// https://angular.io/api/common/DatePipe
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task">
      <h3>{{ task.taskName }}</h3>
      <p>
        A faire avant le :
        {{ task.taskDate | date : 'EEEE dd MMMM YYYY' : '' : 'fr-FR' }}
      </p>
      <p>
        <input
          type="checkbox"
          id="taskDone"
          (change)="handleTaskState($event)"
        /><label for="taskDone">{{ isDoneSig() ? 'fait' : 'à faire' }}</label>
      </p>
    </div>
  `,
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  isDoneSig = signal<boolean>(false);

  handleTaskState(e: Event) {
    this.isDoneSig.update((status) => !status);
  }
}
