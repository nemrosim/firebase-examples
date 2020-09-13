import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import firebase from 'firebase';

import { signInPopupError, signInPopupSuccess } from './actions';
import { firebase_app } from '../../../api/firebase';

export function* worker_signInPopup(): IterableIterator<any> {
    let infoToastID;
    try {
        infoToastID = toast.info('Loading');

        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');

        const userCredential = yield firebase_app.auth().signInWithPopup(provider);

        toast.dismiss(infoToastID);
        toast.success('User logged in');

        yield put(signInPopupSuccess(userCredential));
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(signInPopupError(error));
    }
}
