import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInError, signInSuccess } from './actions';
import { firebase_app } from '../../../api/firebase';

export function* worker_signIn(
    action: Record<'payload', { email: string; password: string }>,
): IterableIterator<any> {
    let infoToastID;
    try {
        infoToastID = toast.info('Loading');

        const { email, password } = action.payload;

        const userCredential = yield firebase_app
            .auth()
            .signInWithEmailAndPassword(email, password);

        toast.dismiss(infoToastID);
        toast.success('User logged in');

        yield put(signInSuccess(userCredential));
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(signInError(error));
    }
}
