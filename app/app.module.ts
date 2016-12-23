import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { AppComponent }  from './app.component';
import {ListComponent} from 'app/components/list/list.component';
import {ReviewsComponent} from 'app/components/reviews/reviews.component';
import {ListItemComponent} from 'app/components/listItem/listItem.component';
import { VirtualScrollDirective } from 'app/directives/virtualScroll/virtualScroll.directive';


@NgModule({
  imports:      [ BrowserModule, HttpModule, VirtualScrollModule ],
  declarations: [ AppComponent, ReviewsComponent, ListComponent, ListItemComponent, VirtualScrollDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
