import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss'],
})
export class BindingsComponent implements OnInit {
  @Input() label: string;
  @Input() color: string;

  constructor() {
    this.label = '';
    this.color = '';
  }

  ngOnInit(): void {}
}
