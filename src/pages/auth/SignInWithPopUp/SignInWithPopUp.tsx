import React from 'react';
import firebaseImage from '../../../assets/firebase.png';
import { useDispatch } from 'redux-react-hook';
import { action_signInWithPopup } from '../../../store/auth/signInWithPopUp';

import './signInWithPopup.scss';

export const SignInWithPopUp: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="sign-in-with-popup">
            <img src={firebaseImage} />

            <span>Sign in with pop up</span>
            <button
                onClick={() => {
                    dispatch(action_signInWithPopup());
                }}
            >
                Sign in
            </button>
        </div>
    );
};
