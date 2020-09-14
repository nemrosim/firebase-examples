import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const setAvatar = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.SET_AVATAR,
        success: ACTIONS.SET_AVATAR_SUCCESS,
        error: ACTIONS.SET_AVATAR_ERROR,
    });
}, getInitialState({}));
