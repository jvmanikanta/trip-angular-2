import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appPopup]'
})
export class PopupDirective implements OnInit {

 
  ngOnInit(): void {
    
  }

  @HostBinding('style.backgroundColor')changeBackground = ''

  @HostListener('mouseenter') mouseEnter(event:Event){
    this.changeBackground = 'green';
    console.log("mouse Entered");
  }
  constructor() { }

}
