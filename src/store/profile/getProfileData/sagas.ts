import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getProfileDataSuccess, getProfileDataError } from './actions';
import { firebase_app } from '../../../api/firebase';

export function* worker_getProfileData(
    action: Record<'payload', { firstName: string; lastName: string }>,
): IterableIterator<any> {
    let infoToastID;
    try {
        infoToastID = toast.info('Loading');

        const { firstName, lastName } = action.payload;

        yield firebase_app
            .firestore()
            .collection('profiles')
            .doc(firebase_app.auth().currentUser.uid)
            .update({ firstName, lastName });

        toast.dismiss(infoToastID);
        toast.success('Profile data saved');

        yield put(getProfileDataSuccess());
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(getProfileDataError(error));
    }
}
