import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

   private counterChanged = new BehaviorSubject<number>(0); // Hot observable
  // private counterChanged = new BehaviorSubject<number>(0);



  get counter$() {
    return this.counterChanged.asObservable(); // downgrade to observable - avoid next, complete and error from outside
  }

  constructor() {
      // observer
      // this.couterChanged.next
      // this.couterChanged.error
      // this.couterChanged.complete

      // Observable
      // this.counterChanged.subscribe()

  }

  plus() {
    this.counterChanged.next(this.counterChanged.value + 1);
  }

  minus() {
    this.counterChanged.next(this.counterChanged.value -1);
  }
}
