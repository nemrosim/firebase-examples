import React, { useState } from 'react';
import firebaseImage from '../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';
import { action_setProfileData } from '../../store/profile/setProfileData';

import './setProfileData.scss';

export const SetProfileData: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const dispatch = useDispatch();

    return (
        <div className="set-profile-data">
            <img src={firebaseImage} />

            <span>Set profile data</span>
            <input
                placeholder="First name"
                value={firstName}
                onChange={(event) => setFirstName(event.currentTarget.value)}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
            />
            <button
                onClick={() => {
                    if (firstName && lastName) {
                        dispatch(action_setProfileData({ firstName, lastName }));
                    }
                }}
            >
                Set profile data
            </button>
        </div>
    );
};
