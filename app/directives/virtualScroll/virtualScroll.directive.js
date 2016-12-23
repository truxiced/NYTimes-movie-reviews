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
 * Created by egragus on 12/23/16.
 */
var core_1 = require('@angular/core');
var VirtualScrollDirective = (function () {
    function VirtualScrollDirective(el) {
        this.el = el;
        this.triggered = false;
        this.updateData = new core_1.EventEmitter();
    }
    VirtualScrollDirective.prototype.onScroll = function (e) {
        if (this.el.nativeElement.scrollTop + this.el.nativeElement.offsetHeight > this.el.nativeElement.children[0].offsetHeight - 50) {
            if (!this.triggered) {
                this.triggered = true;
                this.updateData.emit();
            }
        }
        else {
            this.triggered = false;
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VirtualScrollDirective.prototype, "updateData", void 0);
    __decorate([
        core_1.HostListener('scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], VirtualScrollDirective.prototype, "onScroll", null);
    VirtualScrollDirective = __decorate([
        core_1.Directive({ selector: '[myVirtualScroll]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], VirtualScrollDirective);
    return VirtualScrollDirective;
}());
exports.VirtualScrollDirective = VirtualScrollDirective;
//# sourceMappingURL=virtualScroll.directive.js.map