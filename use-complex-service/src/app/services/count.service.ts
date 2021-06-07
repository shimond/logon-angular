import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private counterChanged = new BehaviorSubject<number>(0);

  get counter$() {
    return this.counterChanged.asObservable(); // downgrade to observable - avoid next, complete and error from outside
  }

  constructor() { }

  plus() {
    this.counterChanged.next(this.counterChanged.value + 1);
  }

  minus() {
    this.counterChanged.next(this.counterChanged.value -1);
  }
}
