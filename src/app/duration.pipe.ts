import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
	transform(minutes) {
		const min = minutes;
    	const hours = (min / 60);
    	const rhours = Math.floor(hours);
    	const calculatedRestMinutes = (hours - rhours) * 60;
    	const rminutes = Math.round(calculatedRestMinutes);
    	let totalDuration;
    	if (rhours === 0) {
    		totalDuration = rminutes + ' minute(s)';
    	} else {
    		totalDuration = rhours + ' hour(s) ' + rminutes + ' minute(s)';
    	}

    	return totalDuration;
	}
}
