import { IAuth } from "../models/IAuth";
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

const initialState: IAuth = { isLogged: false }

export function AuthReducer(state: IAuth = initialState, action: AuthActions) {
    switch (action.type) {
        case AuthActionTypes.LOGGED_IN:
            return { ...state, isLogged: true };
        case AuthActionTypes.LOGGED_OUT:
            return { ...state, isLogged: false }
        default:
            return state
    }
}
