import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  title: string;

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {
    this.setTitle();
  }

  handleClick(): void {
    this.title = 'integration testing clicked';
  }

  setTitle(): void {
    this.title = 'integration testing';
  }
}
