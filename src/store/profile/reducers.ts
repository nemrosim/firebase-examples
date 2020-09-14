import { combineReducers } from 'redux';

import { getProfileData } from './getProfileData/reducer';
import { setProfileData } from './setProfileData/reducer';
import { updateProfileData } from './updateProfileData/reducer';
import { deleteProfileData } from './deleteProfileData/reducer';
import { setAvatar } from './setAvatar/reducer';

export const profile = combineReducers({
    getProfileData,
    setProfileData,
    updateProfileData,
    deleteProfileData,
    setAvatar,
});
