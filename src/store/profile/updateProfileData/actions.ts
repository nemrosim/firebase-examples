import { createAction } from 'redux-actions';

export const UPDATE_PROFILE_DATA = '[PROFILE] UPDATE_PROFILE_DATA';
export const UPDATE_PROFILE_DATA_SUCCESS = '[PROFILE] UPDATE_PROFILE_DATA_SUCCESS';
export const UPDATE_PROFILE_DATA_ERROR = '[PROFILE] UPDATE_PROFILE_DATA_ERROR';

export const action_updateProfileData = createAction(UPDATE_PROFILE_DATA);
export const updateProfileDataSuccess = createAction(UPDATE_PROFILE_DATA_SUCCESS);
export const updateProfileDataError = createAction(UPDATE_PROFILE_DATA_ERROR);
