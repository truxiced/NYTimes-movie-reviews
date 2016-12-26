import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[myToggleIcon]' })

export class ToggleIconDirective {


    isExpanded: boolean = false;

    constructor(private el: ElementRef) { }

    @Output() expanded = new EventEmitter();

    @HostListener('click', ['$event']) windowScroll(e) {

        if(this.isExpanded) {
            this.el.nativeElement.src = '/resources/img/icon-arrow-down-b-128.png';
            this.isExpanded = false;
        } else {
            this.el.nativeElement.src = '/resources/img/icon-arrow-up-b-128.png';
            this.isExpanded = true;
        }

        this.expanded.emit({expanded: this.isExpanded});
    }
}