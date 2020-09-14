import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateProfileDataError, updateProfileDataSuccess } from './actions';
import { firebase_app } from '../../../api/firebase';
import { Profile } from '../../../types/Profile';

export function* worker_updateProfileData(
    action: Record<'payload', Profile>,
): IterableIterator<any> {
    let infoToastID;
    try {
        const userId = firebase_app.auth().currentUser?.uid;
        if (userId) {
            infoToastID = toast.info('Loading');

            const doc = firebase_app
                .firestore()
                .collection('profiles')
                .doc(userId);

            const { firstName, lastName } = action.payload;

            yield doc.update({ firstName, lastName } as Profile); // create new

            toast.dismiss(infoToastID);
            toast.success('Profile data updated');

            yield put(updateProfileDataSuccess());
        } else {
            toast.error('You are not logged in');
        }
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(updateProfileDataError(error));
    }
}
