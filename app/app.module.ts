import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {ReviewsComponent} from 'app/components/reviews/reviews.component';
import {ListItemComponent} from 'app/components/listItem/listItem.component';
import { VirtualScrollDirective } from 'app/directives/virtualScroll/virtualScroll.directive';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ReviewsComponent, ListItemComponent, VirtualScrollDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
