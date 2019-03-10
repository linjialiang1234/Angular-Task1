import { User } from '../../models/user';
import { AuthenticationActionTypes, AuthenticationActions } from '../actions/authentication.actions';


export interface State {
	isAuthenticated: boolean;
	user: User | null;
	errorMessage: string | null;
}

export const initialState: State = {
	isAuthenticated: localStorage.getItem('loginSuccessUser')!== "null",
	user: {
		token: localStorage.getItem('loginSuccessUser'),
		// email: localStorage.getItem('email')
	},
	errorMessage: null
};

export function reducer(state = initialState, action: AuthenticationActions): State {
	switch(action.type) {
		case AuthenticationActionTypes.LOGIN_SUCCESS: {
			return {
				...state,
				isAuthenticated: true,
				user: {
					token: action.payload.token,
					email: action.payload.email
				},
				errorMessage: null
			};
		}

		case AuthenticationActionTypes.LOGIN_FAILURE: {
			return {
				...state,
				errorMessage: 'Wrong credentials.'
			};
		}

		case AuthenticationActionTypes.LOGOUT: {
			return initialState;
		}

		default: {
			return state;
		}
	}
}