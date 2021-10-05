import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterBestPracticeComponent } from './components/counter-best-practice/counter-best-practice.component';
import { SearchComponent } from './components/search/search.component';
import { SearchShowComponent } from './components/search-show/search-show.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterBestPracticeComponent,
    SearchComponent,
    SearchShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
