import { createAction } from 'redux-actions';

export const SIGN_IN = '[AUTH] SIGN_IN';
export const SIGN_IN_SUCCESS = '[AUTH] SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = '[AUTH] SIGN_IN_ERROR';

export const SIGN_OUT = '[AUTH] SIGN_OUT';
export const SIGN_OUT_SUCCESS = '[AUTH] SIGN_OUT_SUCCESS';
export const SIGN_OUT_ERROR = '[AUTH] SIGN_OUT_ERROR';

export const SIGN_UP = '[AUTH] SIGN_UP';
export const SIGN_UP_SUCCESS = '[AUTH] SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = '[AUTH] SIGN_UP_ERROR';

export const signIn = createAction(SIGN_IN);
export const signInSuccess = createAction(SIGN_IN_SUCCESS);
export const signInError = createAction(SIGN_IN_ERROR);

export const signUp = createAction<{ email: string; password: string }>(SIGN_UP);
export const signUpSuccess = createAction(SIGN_UP_SUCCESS);
export const signUpError = createAction(SIGN_UP_ERROR);

export const signOut = createAction(SIGN_OUT);
export const signOutSuccess = createAction(SIGN_OUT_SUCCESS);
export const signOutError = createAction(SIGN_OUT_ERROR);
