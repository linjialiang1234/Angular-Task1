import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
	selector: '[creationDate]'
})

export class CreatedDateDirective implements OnInit {
	@Input ('creationDate') creationDate: any;

	constructor(private el: ElementRef) {
	}

	ngOnInit() {
		this.changeCourseBorderColor();

  	}

	changeCourseBorderColor() {
		let currentDate = new Date();
		let validDateForFreshCourse = currentDate.setDate(currentDate.getDate()  -14);

		if (this.creationDate.createDate < new Date() && this.creationDate.createDate >= validDateForFreshCourse) {
			console.log("fresh course border is green")
			this.el.nativeElement.style.borderColor = 'green';
		} else if (this.creationDate.createDate > new Date()) {
			console.log("upcoming course border is blue")
			this.el.nativeElement.style.borderColor = 'blue';
		} else {
			console.log("nothing to change")
		}
	}
}
