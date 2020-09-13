import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const signIn = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.SIGN_IN,
        success: ACTIONS.SIGN_IN_SUCCESS,
        error: ACTIONS.SIGN_IN_ERROR,
    });
}, getInitialState({}));
