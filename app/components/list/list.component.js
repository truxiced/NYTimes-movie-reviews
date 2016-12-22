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
/**
 * Created by egragus on 12/22/16.
 */
var core_1 = require('@angular/core');
var ListComponent = (function () {
    function ListComponent() {
        this.items = [];
        console.log(this.items);
    }
    __decorate([
        core_1.Input('items'), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "items", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            template: "\n        <ul id=\"list-component-ul\">\n            <li *ngFor=\"let item of items\">\n              <div class=\"test\">\n                <p>{{ item.display_title }}</p>\n\n              </div>\n            </li>\n        </ul>",
            styleUrls: ['app/components/list/list.less']
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map