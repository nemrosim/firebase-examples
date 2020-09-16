import { all, takeLatest } from 'redux-saga/effects';
import { signOut, worker_signOut } from './signOut';
import { signIn, worker_signIn } from './signIn';
import { signUp, worker_signUp } from './signUp';
import { action_signInWithPopup, worker_signInPopup } from './signInWithPopUp';

export function* auth(): IterableIterator<any> {
    yield all([
        takeLatest(signIn, worker_signIn),
        takeLatest(action_signInWithPopup, worker_signInPopup),
        takeLatest(signOut, worker_signOut),
        takeLatest(signUp, worker_signUp),
    ]);
}
