import produce from 'immer';
import * as ACTIONS from './auth.actions';
import { SIGN_UP, SIGN_UP_ERROR, SIGN_UP_SUCCESS } from './auth.actions';

const initialState = {
    signUp: {
        data: {},
        loading: false,
        error: null,
    },
    signIn: {
        data: {},
        loading: false,
        error: null,
    },
    signOut: {
        loading: false,
        error: null,
    },
};

export const authorization = produce((draft, action) => {
    switch (action.type) {
        case SIGN_UP:
            draft.signUp = {
                data: {},
                loading: true,
                error: null,
            };
            break;
        case SIGN_UP_SUCCESS:
            draft.signUp = {
                data: action.payload,
                loading: false,
                error: null,
            };
            break;
        case SIGN_UP_ERROR:
            draft.signUp = {
                data: {},
                loading: false,
                error: action.payload,
            };
            break;
        case ACTIONS.SIGN_IN:
            draft.signIn = {
                data: {},
                loading: true,
                error: null,
            };
            break;
        case ACTIONS.SIGN_IN_SUCCESS:
            draft.signIn = {
                data: action.payload,
                loading: false,
                error: null,
            };
            break;
        case ACTIONS.SIGN_IN_ERROR:
            draft.signIn = {
                data: {},
                loading: false,
                error: action.payload,
            };
            break;
        case ACTIONS.SIGN_OUT:
            draft.signOut = {
                loading: true,
                error: null,
            };
            break;
        case ACTIONS.SIGN_OUT_SUCCESS:
            draft.signOut = {
                loading: false,
                error: null,
            };
            draft.signIn = initialState.signIn;
            break;
        case ACTIONS.SIGN_OUT_ERROR:
            draft.signOut = {
                loading: false,
                error: action.payload,
            };
            break;
        default:
            break;
    }
}, initialState);
