import { createAction } from 'redux-actions';

export const SET_AVATAR = '[PROFILE] SET_AVATAR';
export const SET_AVATAR_SUCCESS = '[PROFILE] SET_AVATAR_SUCCESS';
export const SET_AVATAR_ERROR = '[PROFILE] SET_AVATAR_ERROR';

export const action_setAvatar = createAction(SET_AVATAR);
export const setAvatarSuccess = createAction(SET_AVATAR_SUCCESS);
export const setAvatarError = createAction(SET_AVATAR_ERROR);
