import {Directive, Renderer2, ElementRef, Input} from '@angular/core';

@Directive({
	selector: '[createdDate]'
})

export class CreatedDateDirective {

	constructor(private el: ElementRef, private renderer: Renderer2) {
		// this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
	}

	@Input ('createdDate') createdDate;

	// console.log("888: "+ this.createdDate);
	// if(this.createdDate) {
		
	// }
}