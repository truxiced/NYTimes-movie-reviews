import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search-bar',
    templateUrl: './searchBar.html',
    styleUrls: ['./searchBar.less'],

})
export class SearchBarComponent {
    search: string = "";

    @Output() criteria = new EventEmitter();

    onClick() {
        this.criteria.emit({ searchValue: this.search});
    }
}