import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import firebase from 'firebase';

import { signInPopupError, signInPopupSuccess } from './actions';
import { firebase_app } from '../../../api/firebase';

export function* worker_signInPopup(
    action: Record<'payload', { provider: firebase.auth.AuthProvider }>,
): IterableIterator<any> {
    let infoToastID;
    try {
        const { provider } = action.payload;

        console.log('PROVIDER', provider);

        infoToastID = toast.info('Loading');

        const userCredential = yield firebase_app.auth().signInWithPopup(provider);

        toast.dismiss(infoToastID);
        toast.success('User logged in');

        yield put(signInPopupSuccess(userCredential));
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        console.log(error);

        yield put(signInPopupError(error));
    }
}
