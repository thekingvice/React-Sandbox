import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AccordianComponent } from './accordian/accordian.component';
import { PropsComponent } from './props/props.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AccordianComponent,
    PropsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
