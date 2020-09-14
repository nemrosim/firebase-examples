import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { setAvatarSuccess, setAvatarError } from './actions';
import { firebase_app } from '../../../api/firebase';

function* saveImageToTheStorage(imageBlob: Blob): IterableIterator<any> {
    const userId = firebase_app.auth().currentUser?.uid;

    const storageReference = firebase_app.storage().ref().child(`images/${userId}/avatar.jpg`);

    return yield storageReference.put(imageBlob, {
        contentType: 'image/jpeg',
    });
}

function* getIsUserIdDocumentExists(): IterableIterator<any> {
    const userId = firebase_app.auth().currentUser?.uid;

    const documentReference = firebase_app.firestore().collection('profiles').doc(userId);
    const res = yield documentReference.get();

    // @ts-ignore
    const document = res.data();

    return Boolean(document);
}

export function* worker_setAvatar(action: Record<'payload', Blob>): IterableIterator<any> {
    let infoToastID;
    try {
        infoToastID = toast.info('Loading');

        const uploadedImage = yield saveImageToTheStorage(action.payload);

        const isDocumentExists = yield getIsUserIdDocumentExists();

        // @ts-ignore
        const downloadURL = yield uploadedImage.ref.getDownloadURL();

        const userId = firebase_app.auth().currentUser?.uid;
        const doRef = firebase_app.firestore().collection('profiles').doc(userId);

        if (isDocumentExists) {
            yield doRef.update({
                avatar: downloadURL,
            });
        } else {
            yield doRef.set({
                avatar: downloadURL,
            });
        }

        toast.dismiss(infoToastID);
        toast.success('Avatar image saved');

        yield put(setAvatarSuccess(uploadedImage));
    } catch (error) {
        toast.dismiss(infoToastID);
        toast.error(error.message);

        yield put(setAvatarError(error));
    }
}
