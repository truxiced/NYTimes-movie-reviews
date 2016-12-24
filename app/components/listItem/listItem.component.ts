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
    moduleId: module.id,
    selector: 'list-item',
    templateUrl: './listItem.html',
    styleUrls: ['./listItem.less']
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