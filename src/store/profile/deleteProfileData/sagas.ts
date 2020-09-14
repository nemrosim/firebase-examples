import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { deleteProfileDataError, deleteProfileDataSuccess } from './actions';
import { firebase_app } from '../../../api/firebase';

export function* worker_deleteProfileData(): IterableIterator<any> {
    let infoToastID;
    try {
        const userId = firebase_app.auth().currentUser?.uid;
        if (userId) {
            infoToastID = toast.info('Loading');

            const documentReference = firebase_app.firestore().collection('profiles').doc(userId);

            yield documentReference.delete();

            toast.dismiss(infoToastID);
            toast.success('Profile data deleted');

            yield put(deleteProfileDataSuccess());
        } else {
            toast.error('You are not logged in');
        }
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(deleteProfileDataError(error));
    }
}
