import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getProfileDataSuccess, getProfileDataError } from './actions';
import { firebase_app } from '../../../api/firebase';

export function* worker_getProfileData(): IterableIterator<any> {
    let infoToastID;
    try {
        infoToastID = toast.info('Loading');

        const userId = firebase_app.auth().currentUser?.uid;
        if (userId) {
            const document = yield firebase_app
                .firestore()
                .collection('profiles')
                .doc(userId)
                .get();

            toast.dismiss(infoToastID);
            toast.success('Profile data loaded');

            // @ts-ignore
            const data = document?.data();

            yield put(getProfileDataSuccess(data));
        } else {
            toast.info('Not logged in');
        }
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(getProfileDataError(error));
    }
}
