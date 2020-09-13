import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const setProfileData = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.SET_PROFILE_DATA,
        success: ACTIONS.SET_PROFILE_DATA_SUCCESS,
        error: ACTIONS.SET_PROFILE_DATA_ERROR,
    });
}, getInitialState({}));
