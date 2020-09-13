import { createAction } from 'redux-actions';

export const SIGN_IN = '[AUTH] SIGN_IN';
export const SIGN_IN_SUCCESS = '[AUTH] SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = '[AUTH] SIGN_IN_ERROR';
export const SIGN_IN_RESET_STATE = '[AUTH] SIGN_IN_RESET_STATE';

export const signIn = createAction(SIGN_IN);
export const signInSuccess = createAction(SIGN_IN_SUCCESS);
export const signInError = createAction(SIGN_IN_ERROR);
