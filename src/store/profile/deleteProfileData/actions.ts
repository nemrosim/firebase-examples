import { createAction } from 'redux-actions';

export const DELETE_PROFILE_DATA = '[PROFILE] DELETE_PROFILE_DATA';
export const DELETE_PROFILE_DATA_SUCCESS = '[PROFILE] DELETE_PROFILE_DATA_SUCCESS';
export const DELETE_PROFILE_DATA_ERROR = '[PROFILE] DELETE_PROFILE_DATA_ERROR';

export const action_deleteProfileData = createAction(DELETE_PROFILE_DATA);
export const deleteProfileDataSuccess = createAction(DELETE_PROFILE_DATA_SUCCESS);
export const deleteProfileDataError = createAction(DELETE_PROFILE_DATA_ERROR);
