import { createAction } from 'redux-actions';

export const GET_PROFILE_DATA = '[PROFILE] GET_PROFILE_DATA';
export const GET_PROFILE_DATA_SUCCESS = '[PROFILE] GET_PROFILE_DATA_SUCCESS';
export const GET_PROFILE_DATA_ERROR = '[PROFILE] GET_PROFILE_DATA_ERROR';

export const action_getProfileData = createAction(GET_PROFILE_DATA);
export const getProfileDataSuccess = createAction(GET_PROFILE_DATA_SUCCESS);
export const getProfileDataError = createAction(GET_PROFILE_DATA_ERROR);
