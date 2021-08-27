import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child[title]',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  clicked: EventEmitter<boolean>;

  constructor() {
    this.title = '';
    this.clicked = new EventEmitter<boolean>();
  }

  ngOnInit(): void {}

  handleClickButton(): void {
    this.clicked.emit();
  }
}
