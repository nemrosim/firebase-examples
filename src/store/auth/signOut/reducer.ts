import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const signOut = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.SIGN_OUT,
        success: ACTIONS.SIGN_OUT_SUCCESS,
        error: ACTIONS.SIGN_OUT_ERROR,
    });
}, getInitialState({}));
