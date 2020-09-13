import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { firebase_app } from '../../../api/firebase';
import { signOutError, signOutSuccess } from './actions';

export function* worker_signOut(): IterableIterator<any> {
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
