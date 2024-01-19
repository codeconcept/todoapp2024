import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import Task from '../../interfaces/task';

@Component({
  selector: 'app-taskshead',
  standalone: true,
  imports: [],
  template: `<h3>{{ messageSig() }}</h3>`,
  styles: ``,
})
export class TasksheadComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    const nbTasks = changes['tasks'].currentValue.length;
    const tasksPluralize = nbTasks > 1 ? 'tâches' : 'tâche';
    this.messageSig.set(`${nbTasks} ${tasksPluralize}`);
  }
  @Input({ required: true }) tasks!: Task[];

  messageSig = signal<string>('');
}
