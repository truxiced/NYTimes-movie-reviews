/**
 * Created by egragus on 12/23/16.
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[myVirtualScroll]' })



export class VirtualScrollDirective {


    triggered: boolean = false;

    constructor(private el: ElementRef) { }

    @Output() updateData = new EventEmitter();

    @HostListener('scroll', ['$event']) onScroll(e) {

        if(this.el.nativeElement.scrollTop + this.el.nativeElement.offsetHeight > this.el.nativeElement.children[0].offsetHeight -50) {
            if(!this.triggered) {
                this.triggered = true;
                this.updateData.emit();
            }
        } else {
            this.triggered = false;
        }
    }
}