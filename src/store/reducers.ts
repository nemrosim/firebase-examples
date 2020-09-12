import { combineReducers } from 'redux';

import { authorization } from './auth/auth.reducer';

export const reducers = combineReducers({
    authorization,
});
