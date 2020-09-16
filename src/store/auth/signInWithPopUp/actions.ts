import { createAction } from 'redux-actions';

export const SIGN_IN_POPUP = '[AUTH] SIGN_IN_POPUP';
export const SIGN_IN_POPUP_SUCCESS = '[AUTH] SIGN_IN_POPUP_SUCCESS';
export const SIGN_IN_POPUP_ERROR = '[AUTH] SIGN_IN_POPUP_ERROR';

export const action_signInWithPopup = createAction(SIGN_IN_POPUP);
export const signInPopupSuccess = createAction(SIGN_IN_POPUP_SUCCESS);
export const signInPopupError = createAction(SIGN_IN_POPUP_ERROR);
