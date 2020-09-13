import { combineReducers } from 'redux';

import { signIn } from './signIn/reducer';
import { signOut } from './signOut/reducer';
import { signUp } from './signUp/reducer';

export const auth = combineReducers({
    signIn,
    signOut,
    signUp,
});
