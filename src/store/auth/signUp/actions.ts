import { createAction } from 'redux-actions';

export const SIGN_UP = '[AUTH] SIGN_UP';
export const SIGN_UP_SUCCESS = '[AUTH] SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = '[AUTH] SIGN_UP_ERROR';

export const signUp = createAction<{ email: string; password: string }>(SIGN_UP);
export const signUpSuccess = createAction(SIGN_UP_SUCCESS);
export const signUpError = createAction(SIGN_UP_ERROR);
