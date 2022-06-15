import { Component, Input, OnInit } from '@angular/core';
import { TodoTask } from './task/todotask.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks: TodoTask[] = [
    { title: 'test0', status: false, id: 0 },
    { title: 'test1', status: false, id: 1 },
    { title: 'test2', status: false, id: 2 },
    { title: 'test3', status: false, id: 3 },
    { title: 'test4', status: false, id: 4 },
  ];
  constructor() {}

  addTask(title: string): void {
    this.tasks.push({
      title: title,
      status: false,
      id: this.tasks.length,
    });
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  ngOnInit(): void {}
}
