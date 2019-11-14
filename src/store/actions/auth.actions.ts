import { Action } from "@ngrx/store";

export enum AuthActionTypes {
    LOGGED_IN = "[Auth] Logged In",
    LOGGED_OUT = "[Auth] Logged Out"
}

export class AuthLoggedInAction implements Action {
    readonly type = AuthActionTypes.LOGGED_IN;
    constructor() { }
}

export class AuthLoggedOutAction implements Action {
    readonly type = AuthActionTypes.LOGGED_OUT;
    constructor() { }
}

export type AuthActions = AuthLoggedInAction | AuthLoggedOutAction;
