import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountService } from 'src/app/services/count.service';
import { map, filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-counter-best-practice',
  templateUrl: './counter-best-practice.component.html',
  styleUrls: ['./counter-best-practice.component.scss']
})
export class CounterBestPracticeComponent implements OnInit {

  count$: Observable<number>; // צינור מידע של מספרים
  constructor(private countService: CountService) { }

  ngOnInit(): void {
    // this.count$ = this.countService.counter$;
    this.count$ = this.countService.counter$.pipe(filter(x => x % 2 == 0), map(x => x * 100), debounceTime(2000));
  }

  plus() {
    this.countService.plus();
  }
  minus() {
    this.countService.minus();
  }

}
