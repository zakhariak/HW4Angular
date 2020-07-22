import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Homework4Component } from './homework4/homework4.component';
import { SearchPipe } from './homework4/search.pipe';

@NgModule({
  declarations: [
    AppComponent,

    Homework4Component,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  exports: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
