import { Action } from '@ngrx/store';

export enum ActionTypes {
	Increment = '[Counter Component] Increment',
	IncrementAsync = '[Counter Component] Increment Async',
	IncrementAsyncSuccess = '[Counter Component] Increment Async Success',
	Decrement = '[Counter Component] Decrement',
	Reset = '[Counter Component] Reset',
}

	export class Increment implements Action {
		readonly type = ActionTypes.Increment;
	}

	export class IncrementAsync implements Action {
		readonly type = ActionTypes.IncrementAsync;
	}

	export class IncrementAsyncSuccess implements Action {
		readonly type = ActionTypes.IncrementAsyncSuccess
	}

	export class Decrement implements Action {
		readonly type = ActionTypes.Decrement;
	}

	export class Reset implements Action {
		readonly type = ActionTypes.Reset
	}
