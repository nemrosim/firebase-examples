import React from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';
import { action_deleteProfileData } from '../../../store/profile/deleteProfileData';

import './deleteProfileData.scss';

export const DeleteProfileData: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="delete-profile-data">
            <img src={firebaseImage} />

            <span>Do you want to delete profile data</span>
            <button onClick={() => dispatch(action_deleteProfileData())}>Yes</button>
        </div>
    );
};
