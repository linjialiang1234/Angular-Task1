import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterCourse'})
export class FilterCoursePipe implements PipeTransform {
	transform(items, searchText) {
        if(!items) return [];
        if(!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter(item => {
            return item.title.toLowerCase().includes(searchText);
        });
	}
}