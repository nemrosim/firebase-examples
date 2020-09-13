import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const getProfileData = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.GET_PROFILE_DATA,
        success: ACTIONS.GET_PROFILE_DATA_SUCCESS,
        error: ACTIONS.GET_PROFILE_DATA_ERROR,
    });
}, getInitialState({}));
