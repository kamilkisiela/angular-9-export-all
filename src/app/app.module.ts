import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloAngularModule } from 'apollo-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApolloAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
