import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoTask } from './todotask.interface';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: TodoTask;
  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() finishTaskEvent = new EventEmitter<number>();

  deleteTaskItem(id: number): void {
    this.deleteTaskEvent.emit(id);
  }

  finishTaskItem(id: number): void {
    this.finishTaskEvent.emit(id);
  }

  ngOnInit(): void {}
}
