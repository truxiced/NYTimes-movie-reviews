import { Component, Input } from '@angular/core';

export interface ListItem {
    display_title: string;
    mpaa_rating: string;
    critics_pick: number;
    byline: string;
    headline: string;
    summary_short: string;
    publication_date: string;
    opening_date: string;
    date_updated: string;
    link: list;
    multimedia: multimedia;
}

export interface list {
    type: string;
    url: string;
    suggested_link_text: string;
}

export interface multimedia {
    type: string;
    src: string;
    width: number;
    height: number;
}

@Component({
    selector: 'list-item',
    template: `
        <div class="itemList-container">
            <div><img class="itemList-img" src="{{getImgUrl(item)}}" height="60" width="60" /></div>
            <div class="item-content">
                <div class="name">{{item.mpaa_rating}}</div>
                <div>
                    <span class="badge">{{item.critics_pick}} / {{item.byline}}</span>
                    <span>{{item.summary_short}} | {{item.publication_date}}</span>
                </div>
                <div>{{item.date_updated}}</div>
            </div>
        </div>
    `,
    styleUrls: ['app/components/listItem/listItem.less']
})
export class ListItemComponent {
    @Input()
        item;

    constructor(){
        console.log(this.item)
    }

    getImgUrl(item) {
        return item.multimedia && item.multimedia.src ? item.multimedia.src : "";
    }
}