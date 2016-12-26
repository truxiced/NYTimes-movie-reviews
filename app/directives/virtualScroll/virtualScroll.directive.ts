import { Directive, HostListener, Output, EventEmitter, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Directive({ selector: '[myVirtualScroll]' })

export class VirtualScrollDirective {


    triggered: boolean;

    constructor(@Inject(DOCUMENT) private document: Document) { }

    @Output() updateData = new EventEmitter();

    @HostListener('window:scroll', ['$event']) windowScroll(e) {

        if(this.document.body.scrollTop + e.currentTarget.innerHeight > this.document.body.offsetHeight -50) {
            if(!this.triggered) {
                this.triggered = true;
                this.updateData.emit();
            }
        } else {
            this.triggered = false;
        }
    }

}