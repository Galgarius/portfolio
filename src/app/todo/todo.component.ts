import { Component, Input, OnInit } from '@angular/core';
import { TodoTask } from './task/todotask.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks: TodoTask[] = [];
  constructor() {}

  addTask(task: HTMLInputElement): void {
    this.tasks.push({
      title: task.value,
      status: false,
      id: this.tasks.length,
    });
    task.value = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  finishTask(id: number) {
    let task = this.tasks.find((task) => task.id == id);
    if (typeof task != 'undefined') {
      task.status = true;
    } else {
      console.error(`Couldn't find task with id ${id}`);
    }
  }

  ngOnInit(): void {}
}
