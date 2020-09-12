import { all, put, takeLatest } from 'redux-saga/effects';

import {
    signIn,
    signInSuccess,
    signUp,
    signUpSuccess,
    signOut,
    signUpError,
    signOutSuccess,
    signOutError,
} from './auth.actions';
import { firebase_app } from '../../api/firebase';
import { toast } from 'react-toastify';

export function* worker_signUp(
    action: Record<'payload', { email: string; password: string }>,
): IterableIterator<any> {
    let toastId;
    try {
        toastId = toast.info('Loading');
        const { email, password } = action.payload;

        const confirmationResult = yield firebase_app
            .auth()
            .createUserWithEmailAndPassword(email, password);

        toast.dismiss(toastId);
        toast.success('User created');

        yield put(signUpSuccess(confirmationResult));
    } catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message);
        yield put(signUpError(error));
    }
}

function* workerSignOut() {
    let toastId;
    try {
        toastId = toast.info('Loading');

        yield yield firebase_app.auth().signOut();

        toast.dismiss(toastId);
        toast.success('User logged out');

        yield put(signOutSuccess());
    } catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message);
        yield put(signOutError(error));
    }
}

function* workerSignIn() {
    yield put(signInSuccess());
}

export function* authorization(): IterableIterator<any> {
    yield all([
        takeLatest(signIn, workerSignIn),
        takeLatest(signOut, workerSignOut),
        takeLatest(signUp, worker_signUp),
    ]);
}
