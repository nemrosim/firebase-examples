import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const signUp = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.SIGN_UP,
        success: ACTIONS.SIGN_UP_SUCCESS,
        error: ACTIONS.SIGN_UP_ERROR,
    });
}, getInitialState({}));
