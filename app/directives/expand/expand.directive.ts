import { Directive, Input, ElementRef, SimpleChanges, OnChanges } from '@angular/core';

@Directive({ selector: '[myExpand]' })

export class ExpandDirective implements OnChanges{

    @Input() isExpanded;

    constructor(private el:ElementRef ){ }

    ngOnChanges(changes: SimpleChanges) {
        if(this.isExpanded) {
            this.el.nativeElement.style.display= "block";
        } else {
            this.el.nativeElement.style.display= "none";
        }
    }
}