"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ListItemComponent = (function () {
    function ListItemComponent() {
        console.log(this.item);
    }
    ListItemComponent.prototype.getImgUrl = function (item) {
        return item.multimedia && item.multimedia.src ? item.multimedia.src : "";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListItemComponent.prototype, "item", void 0);
    ListItemComponent = __decorate([
        core_1.Component({
            selector: 'list-item',
            template: "\n        <div class=\"itemList-container\">\n            <div><img class=\"itemList-img\" src=\"{{getImgUrl(item)}}\" height=\"60\" width=\"60\" /></div>\n            <div class=\"item-content\">\n                <div class=\"name\">{{item.mpaa_rating}}</div>\n                <div>\n                    <span class=\"badge\">{{item.critics_pick}} / {{item.byline}}</span>\n                    <span>{{item.summary_short}} | {{item.publication_date}}</span>\n                </div>\n                <div>{{item.date_updated}}</div>\n            </div>\n        </div>\n    ",
            styleUrls: ['app/components/listItem/listItem.less']
        }), 
        __metadata('design:paramtypes', [])
    ], ListItemComponent);
    return ListItemComponent;
}());
exports.ListItemComponent = ListItemComponent;
//# sourceMappingURL=listItem.component.js.map