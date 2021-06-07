import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  textChanged = new Subject<string>();
  textToServer: Observable<string>;
  constructor() { }

  ngOnInit(): void {
    this.textToServer = this.textChanged
      .pipe(
        filter(x => x.length > 3),
        debounceTime(500)
      );
  }

}
