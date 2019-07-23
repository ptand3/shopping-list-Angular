/* we can create our own diretives to handle any click events and 
 set the directives on to the element on which we want to perform any event
 @HostBinding  will bind the host properties onto the element on which the directive is applied
  If a binding changes, HostBinding will update the host element. */

import { Directive, OnInit, HostListener, HostBinding ,ElementRef,Renderer2 } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';

@Directive({
    selector: '[appDropdown]' //to indicate that it is used as a attribute selector
})

export class Dropdown implements OnInit {
  
  
    constructor(private elementRef: ElementRef){ }

     @HostBinding("class.open") isOpen = false;

     @HostListener("click") toggleOpen(){
         this.isOpen = !this.isOpen;
         this.elementRef.nativeElement.style.display="block";
     }
    ngOnInit(){
        // console.log("dropdown is initialised!");
    }
  
}