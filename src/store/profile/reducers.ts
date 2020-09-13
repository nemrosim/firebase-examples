import { combineReducers } from 'redux';

import { getProfileData } from './getProfileData/reducer';
import { setProfileData } from './setProfileData/reducer';

export const profile = combineReducers({
    getProfileData,
    setProfileData,
});
