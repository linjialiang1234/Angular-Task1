import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {Increment, Decrement, Reset, IncrementAsync} from '../store/counter.actions';

@Component({
	selector: 'app-my-counter',
	templateUrl: './my-counter.component.html'
})

export class MyCounterComponent {
	count$: Observable<number>;

	constructor(private store: Store<{count: number}>) {
		this.count$ = store.pipe(select('count'));
	}

	increment() {
		this.store.dispatch(new Increment());
	}

	incrementAsync() {
		this.store.dispatch(new IncrementAsync());
	}

	decrement() {
		this.store.dispatch(new Decrement());
	}

	reset() {
		this.store.dispatch(new Reset());
	}
}