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

  deleteTaskItem(id: number): void {
    console.log(`emit {id}`);
    this.deleteTaskEvent.emit(id);
  }

  finishTask(): void {}

  ngOnInit(): void {}
}
