import { Component, Input } from '@angular/core';
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
    <p>A faire avant le : {{ task.taskDate | date:'EEEE dd MMMM YYYY':'':'fr-FR' }}</p>
   </div>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input({ required: true }) task!: Task;
}
