import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//HOMEWORK1 <<<
// import { HeaderComponent } from './homework1/header/header.component';
// import { MainComponent } from './homework1/main/main.component';
//>>>
// import { Homework2Component } from './homework2/homework2.component';
// import { Homework3Component } from './homework3/homework3.component';

import { Homework4Component } from './homework4/homework4.component';
import { SearchPipe } from './homework4/search.pipe';

@NgModule({
  declarations: [
    AppComponent,

    //HOMEWORK1 <<<
    // HeaderComponent,
    // MainComponent,
    //>>>
    // Homework2Component,
    // Homework3Component,
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
