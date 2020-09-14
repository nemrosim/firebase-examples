import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

import noAvatarImage from '../../../assets/no-avatar.jpg';
import firebaseImage from '../../../assets/firebase.png';

import './setProfileImage.scss';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { action_setAvatar } from '../../../store/profile/setAvatar';
import { isAvatarImageUploading } from '../../../store/profile/selectors';

const NoAvatar = () => {
    return (
        <div className="image-container">
            <img style={{ width: '200px' }} alt="profile" src={noAvatarImage} />
        </div>
    );
};

export const SetProfileImage = () => {
    const dispatch = useDispatch();

    const isLoading = useMappedState(isAvatarImageUploading);

    const [imageRef, setImageRef] = useState<AvatarEditor | null>(null);
    const [avatar, setAvatar] = useState<File>();
    const uploadImageInputRef = useRef<HTMLInputElement>(null);

    const setEditorRef = (editor: AvatarEditor | null) => setImageRef(editor);

    if (isLoading) {
        return (
            <div className="set-profile-image">
                <img src={firebaseImage} />
                <span>Processing...</span>
            </div>
        );
    }

    return (
        <div className="set-profile-image">
            <img src={firebaseImage} />
            <span>Upload your photo</span>
            {avatar ? (
                <AvatarEditor
                    style={{
                        margin: '20px',
                        marginTop: '0px',
                        width: '250px',
                        height: '378px',
                    }}
                    ref={setEditorRef}
                    image={URL.createObjectURL(avatar)}
                    border={0}
                    width={852}
                    height={1280}
                    borderRadius={0}
                    color={[255, 255, 255, 0.6]}
                    scale={1}
                />
            ) : (
                <NoAvatar />
            )}
            <button onClick={() => uploadImageInputRef.current?.click()}>Select photo</button>
            <input
                ref={uploadImageInputRef}
                type="file"
                accept=".jpg, .jpeg"
                onChange={(e) => {
                    const { files } = e.target;
                    if (files) {
                        const file = files[0];
                        if (file) {
                            setAvatar(file);
                        }
                    }
                }}
                style={{ display: 'none' }}
            />
            <button
                type="submit"
                disabled={false}
                onClick={() => {
                    if (imageRef && avatar) {
                        const canvasScaledImage: HTMLCanvasElement = imageRef.getImageScaledToCanvas();
                        canvasScaledImage.toBlob(
                            (imageBlob: Blob | null) => {
                                dispatch(action_setAvatar(imageBlob));
                            },
                            'image/jpeg',
                            0.9,
                        );
                    }
                }}
            >
                <span>Save</span>
            </button>
        </div>
    );
};
