import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  signal,
} from '@angular/core';
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
          [id]="task.id"
          (change)="handleTaskState($event)"
          [checked]="isDoneSig()"
        /><label [for]="task.id">{{ isDoneSig() ? 'fait' : 'à faire' }}</label>
        &nbsp; <button (click)="handleDelete()">suppr</button>
      </p>
    </div>
  `,
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['task'].currentValue.done);
    this.isDoneSig.set(changes['task'].currentValue.done);
  }

  @Input({ required: true }) task!: Task;
  @Output() onTaskStatusChange: EventEmitter<any> = new EventEmitter();
  @Output() onTaskDelete: EventEmitter<any> = new EventEmitter();

  isDoneSig = signal<boolean>(false);

  handleTaskState(e: Event) {
    this.isDoneSig.update((status) => !status);
    this.onTaskStatusChange.emit([this.isDoneSig(), this.task.id]);
  }

  handleDelete() {
    this.onTaskDelete.emit(this.task.id);
  }
}
