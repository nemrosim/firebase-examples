import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const signInPopup = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.SIGN_IN_POPUP,
        success: ACTIONS.SIGN_IN_POPUP_SUCCESS,
        error: ACTIONS.SIGN_IN_POPUP_ERROR,
    });
}, getInitialState({}));
