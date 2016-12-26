import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { ReviewsComponent } from 'app/components/reviews/reviews.component';
import { ListItemComponent } from 'app/components/listItem/listItem.component';
import { VirtualScrollDirective } from 'app/directives/virtualScroll/virtualScroll.directive';
import { SearchBarComponent } from 'app/components/searchBar/searchBar.component';
import { ToggleIconDirective } from 'app/directives/toggleIcon/toggleIcon.directive';
import { ExpandDirective } from 'app/directives/expand/expand.directive';




@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ ReviewsComponent, ListItemComponent, VirtualScrollDirective, SearchBarComponent, ToggleIconDirective, ExpandDirective ],
  bootstrap:    [ ReviewsComponent ]
})
export class AppModule { }
