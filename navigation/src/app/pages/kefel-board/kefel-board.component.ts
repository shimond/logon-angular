import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, Observable, of } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-kefel-board',
  templateUrl: './kefel-board.component.html',
  styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit, OnDestroy {

  length$: Observable<number> | undefined;
  items$!: Observable<{ x: number, y: number }[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.length$ = merge(of(6), this.activatedRoute.queryParams.pipe(map(qp => qp.length), filter(x => !!x)));
    this.items$ = this.length$.pipe(map(length => {
      const items = [];
      for (let index = 1; index <= length; index++) {
        for (let index2 = 1; index2 <= length; index2++) {
          items.push({ x: index, y: index2 })
        }
      }
      return items;
    }));

    // this.activatedRoute.queryParams.subscribe(queryParams => {
    //   this.length = queryParams.length || 6;
    //   for (let index = 1; index <= this.length; index++) {
    //     for (let index2 = 1; index2 <= this.length; index2++) {
    //       this.items.push({ x: index, y: index2 })
    //     }
    //   }
    // });


  }
  goToResult(x: number, y: number) {
    this.router.navigate(['/', 'result', x, y]);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Kefel');
  }
}
