import { createAction } from 'redux-actions';

export const SET_PROFILE_DATA = '[PROFILE] SET_PROFILE_DATA';
export const SET_PROFILE_DATA_SUCCESS = '[PROFILE] SET_PROFILE_DATA_SUCCESS';
export const SET_PROFILE_DATA_ERROR = '[PROFILE] SET_PROFILE_DATA_ERROR';

export const action_setProfileData = createAction(SET_PROFILE_DATA);
export const setProfileDataSuccess = createAction(SET_PROFILE_DATA_SUCCESS);
export const setProfileDataError = createAction(SET_PROFILE_DATA_ERROR);
