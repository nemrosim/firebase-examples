import { createAction } from 'redux-actions';

export const SIGN_OUT = '[AUTH] SIGN_OUT';
export const SIGN_OUT_SUCCESS = '[AUTH] SIGN_OUT_SUCCESS';
export const SIGN_OUT_ERROR = '[AUTH] SIGN_OUT_ERROR';

export const signOut = createAction(SIGN_OUT);
export const signOutSuccess = createAction(SIGN_OUT_SUCCESS);
export const signOutError = createAction(SIGN_OUT_ERROR);
