import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressInputComponent } from './components/address-input/address-input.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { MulitSelectListComponent } from './components/mulit-select-list/mulit-select-list.component';
import {HttpClientModule  } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddressInputComponent,
    LabelInputComponent,
    MulitSelectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
