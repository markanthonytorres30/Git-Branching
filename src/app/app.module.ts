import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
  AppComponent,
  HighlightDirective,
  TitleComponent,

  AwesomePipe,
  ContactComponent,
  ContactHighlightDirective
],
 imports: [ BrowserModule, FormsModule ],
 
 providers: [ ContactService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
