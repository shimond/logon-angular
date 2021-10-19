import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getHobbies(): Observable<string[]> {
    return of(['C#', 'Angular', 'XBOX', 'Java', 'Soccer', 'Basketball', 'Swimming', 'Cobol']).pipe(delay(3000));
  }
}
