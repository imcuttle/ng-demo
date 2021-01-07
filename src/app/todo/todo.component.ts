import {ReactiveState} from '../../models/reactive-state';
// @ts-ignore
import { defineSymbolic, symbolicLink } from 'symbolic-link';
import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comp-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  state = new ReactiveState(false);
  @Input() done: boolean | undefined;
  @Output() doneChange = this.state.emitter;
  @Input() content = '';
  @Input() disabled = false;
  // @Input() done = false;

  constructor() {
    symbolicLink(this, 'done', this.state, 'value');
  }

  ngOnInit(): void {
  }

}
