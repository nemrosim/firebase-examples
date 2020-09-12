import React from 'react';
import firebaseImage from '../../assets/firebase.png';
import './signIn.scss';

export const SignIn: React.FC = () => {
    return (
        <div className="sign-in">
            <img src={firebaseImage} />

            <span>Sign in</span>
            <input placeholder="Email" />
            <input placeholder="Password" />
            <button>CLick me</button>
        </div>
    );
};
