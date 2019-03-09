import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ActionTypes, IncrementAsyncSuccess} from './counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class CounterEffects {
	incrementAsync$ = this.actions$
		.pipe(
			ofType(ActionTypes.IncrementAsync),
			map(_=> new IncrementAsyncSuccess())
			);

	constructor(
		private actions$: Actions,
		private store: Store<any>
	){}
}