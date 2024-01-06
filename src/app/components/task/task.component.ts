import { Component, Input } from '@angular/core';
import Task from '../../interfaces/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `
    <p>
      task {{ task.taskName }} works!   
    </p>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input({ required: true }) task!: Task;
}
