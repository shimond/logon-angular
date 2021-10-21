import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  calcResult$!: Observable<number>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.calcResult$ = this.activatedRoute.params.pipe(map(params => +params.paramY * +params.paramX));
  }

}
