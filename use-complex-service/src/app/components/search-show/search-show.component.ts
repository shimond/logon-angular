import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { Show } from 'src/app/models/show.model';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.scss']
})
export class SearchShowComponent implements OnInit {

  textChanged = new Subject<string>();
  textToServer: Observable<string>;
  shows$: Observable<Show[]>;

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.shows$ = this.textChanged
      .pipe(
        filter(x => x.length > 2),
        debounceTime(500),
        switchMap(term => this.showsService.searchShow(term)),
        map(shows => shows.map(o => o.show)));


        // tap, CombineLatest, Merge
  }
}

