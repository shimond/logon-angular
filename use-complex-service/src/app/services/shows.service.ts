import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowResult } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }


  searchShow(term: string) {
    const url = `https://api.tvmaze.com/search/shows?q=${term}`;
    return this.httpClient.get<ShowResult[]>(url); // Cold observable
  }
}
