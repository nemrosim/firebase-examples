import React, { useEffect, useState } from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { action_getProfileData } from '../../../store/profile/getProfileData';
import { firebase_app } from '../../../api/firebase';
import { getProfile } from '../../../store/profile/selectors';
import { action_updateProfileData } from '../../../store/profile/updateProfileData';

import './updateProfileData.scss';

export const UpdateProfileData: React.FC = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

    firebase_app.auth().onAuthStateChanged((user) => {
        if (user) {
            setIsUserLoggedIn(true);
        }
    });

    useEffect(() => {
        if (isUserLoggedIn) {
            dispatch(action_getProfileData());
        }
    }, [isUserLoggedIn, dispatch]);

    const { data: profile, loading: isProfileLoading } = useMappedState(getProfile);

    useEffect(() => {
        if (profile) {
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
        }
    }, [profile, isProfileLoading]);

    return (
        <div className="set-profile-data">
            <img src={firebaseImage} />

            <span>Update profile data</span>
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
                        dispatch(action_updateProfileData({ firstName, lastName }));
                    }
                }}
            >
                Update profile data
            </button>
        </div>
    );
};
