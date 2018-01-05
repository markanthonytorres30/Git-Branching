import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
  AppComponent,
  HighlightDirective,
  TitleComponent,
],
  imports: [
    BrowserModule
  ],
 providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
