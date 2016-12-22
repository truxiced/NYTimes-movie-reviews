import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {ListComponent} from 'app/components/list/list.component';
import {ReviewsComponent} from 'app/components/reviews/reviews.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ReviewsComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
