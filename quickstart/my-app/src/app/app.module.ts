import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/platform-browser'; //NgModule lives here

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //import formsModule before binding with [{ngModule}]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
