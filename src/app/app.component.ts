import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoapp2024';
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskDate: new FormControl(''),
  });

  addTask(evt: Event): void {
    evt.preventDefault();
    console.log(this.taskForm.value);
    this.taskForm.reset();
  }
}
