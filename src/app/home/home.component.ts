import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  label: string;
  color: string;

  constructor() {
    this.label = 'Hello world';
    this.color = 'green';
  }

  ngOnInit(): void {}
}
