import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//HOMEWORK1 <<<
// import { HeaderComponent } from './homework1/header/header.component';
// import { MainComponent } from './homework1/main/main.component';
//>>>

//HOMEWORK2 <<<
// import { Homework2Component } from './homework2/homework2.component';
//>>>

//HOMEWORK3 <<<
import { Homework3Component } from './homework3/homework3.component';
//>>>

@NgModule({
  declarations: [
    AppComponent,
    //HOMEWORK1 <<<
    // HeaderComponent,
    // MainComponent,
    //>>>

    //HOMEWORK2 <<<
    // Homework2Component,
    //>>>

    //HOMEWORK3 <<<
    Homework3Component,
    //>>>
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
