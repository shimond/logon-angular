import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-users',
  templateUrl: './only-users.component.html',
  styleUrls: ['./only-users.component.scss']
})
export class OnlyUsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

    doRequest() {
    this.http.get<string>(`${environment.apiUrl}/api/Auth/OnlyAdmin`).subscribe(o=>{
      alert(JSON.stringify(o));
    })
  }

}
