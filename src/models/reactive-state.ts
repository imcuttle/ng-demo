import {EventEmitter} from '@angular/core';

export class ReactiveState<T> {
  // tslint:disable-next-line:variable-name
  private _value: T | any = null;
  // tslint:disable-next-line:typedef
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.emitter.emit(val);
  }

  constructor(value: T) {
    this.set(value);
  }

  emitter = new EventEmitter<T>();

  // tslint:disable-next-line:typedef
  set(val: T | ((old: T) => T)) {
    if (typeof val === 'function') {
      // @ts-ignore
      this.value = val(this.value);
      return;
    }
    this.value = val;
  }
}
