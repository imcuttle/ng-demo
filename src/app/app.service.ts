import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  todoList = [
    {
      content: 'Placeholder',
      done: true,
      id: 1
    }
  ];

  unshiftTodo(todo: any) {
    this.todoList.unshift({...todo, id: Date.now()})
  }
}
