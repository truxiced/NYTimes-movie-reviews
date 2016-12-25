/**
 * Created by egragus on 12/23/16.
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Directive({ selector: '[myVirtualScroll]' })

export class VirtualScrollDirective {


    triggered: boolean = false

    constructor(@Inject(DOCUMENT) private document: Document) { }

    @Output() updateData = new EventEmitter();

    @HostListener('window:scroll', ['$event', '$window']) windowScroll(e, w) {

        if(this.document.body.scrollTop + e.currentTarget.innerHeight > this.document.body.offsetHeight -50) {
            if(!this.triggered) {
                this.triggered = true;
                this.updateData.emit();
            }
        } else {
            this.triggered = false;
        }
    }

   // @HostListener('scroll', ['$event', '$window']) onScroll(e, window) {

     //   console.log(window.scrollTop);
        /*if(this.el.nativeElement.scrollTop + this.el.nativeElement.offsetHeight > this.el.nativeElement.children[0].offsetHeight -50) {
            if(!this.triggered) {
                this.triggered = true;
                this.updateData.emit();
            }
        } else {
            this.triggered = false;
        }*/
    //}
}