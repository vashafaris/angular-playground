import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
})
export class GrandChildComponent implements OnInit {
  @Input()
  title: string;

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {}
}
