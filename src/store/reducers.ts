import { combineReducers } from 'redux';

import { auth } from './auth/reducers';

export const reducers = combineReducers({
    auth,
});
