/**
 * Created by egragus on 12/22/16.
 */
import {Component, Input} from '@angular/core';


@Component({
    selector: 'list',
    template: `
        <ul id="list-component-ul">
            <li *ngFor="let item of items">
              <div class="test">
                <p>{{ item.display_title }}</p>

              </div>
            </li>
        </ul>`
        ,
    styleUrls: ['app/components/list/list.less']


})
export class ListComponent {

    @Input('items') items = [];

    constructor(){
      console.log(this.items)
    }
}
