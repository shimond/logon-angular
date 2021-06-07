import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  subs = new Subscription();
  count: number;
  constructor(private countService: CountService) { }

  ngOnInit(): void {
    const subToCount = this.countService.counter$.subscribe(newCounter => {
      this.count = newCounter;
      console.log('counterComponent counter changed.', newCounter);
    });
    this.subs.add(subToCount);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  plus() {
    this.countService.plus();
  }
  minus() {
    this.countService.minus();

  }

}
