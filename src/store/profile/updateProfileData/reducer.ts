import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const updateProfileData = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.UPDATE_PROFILE_DATA,
        success: ACTIONS.UPDATE_PROFILE_DATA_SUCCESS,
        error: ACTIONS.UPDATE_PROFILE_DATA_ERROR,
    });
}, getInitialState({}));
