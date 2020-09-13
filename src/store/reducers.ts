import { combineReducers } from 'redux';

import { auth } from './auth/reducers';
import { profile } from './profile/reducers';

export const reducers = combineReducers({
    auth,
    profile,
});
