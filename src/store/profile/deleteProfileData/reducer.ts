import produce from 'immer';
import * as ACTIONS from './actions';
import { allInOne, getInitialState } from '../../../utils/reduxHelpers';

export const deleteProfileData = produce((draft, action) => {
    allInOne({
        action,
        draft,
        defaultDataState: {},
        request: ACTIONS.DELETE_PROFILE_DATA,
        success: ACTIONS.DELETE_PROFILE_DATA_SUCCESS,
        error: ACTIONS.DELETE_PROFILE_DATA_ERROR,
    });
}, getInitialState({}));
