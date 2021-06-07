import { Component } from '@angular/core';
import { CountService } from './services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-complex-service';
  count: number = 0;
  showHide = false;

  constructor(private countService: CountService) {
    this.countService.counter$.subscribe(newCounter => {
      this.count = newCounter;
    });
  }
}
