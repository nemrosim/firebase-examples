import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { firebase_app } from '../../../api/firebase';
import { signUpError, signUpSuccess } from './actions';

export function* worker_signUp(
    action: Record<'payload', { email: string; password: string }>,
): IterableIterator<any> {
    let infoToastID;
    try {
        infoToastID = toast.info('Loading');

        const { email, password } = action.payload;

        const confirmationResult = yield firebase_app
            .auth()
            .createUserWithEmailAndPassword(email, password);

        toast.dismiss(infoToastID);
        toast.success('User created');

        yield put(signUpSuccess(confirmationResult));
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(signUpError(error));
    }
}
