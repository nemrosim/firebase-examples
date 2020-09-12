import React, { useEffect, useState } from 'react';
import firebaseImage from '../../assets/firebase.png';
import './signUp.scss';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { signUp } from '../../store/auth/auth.actions';
import { firebase_app } from '../../api/firebase';

export const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const dispatch = useDispatch();

    const mappedState = useMappedState((state) => state);

    console.log('mapped state', mappedState);
    return (
        <div className="sign-up">
            <img src={firebaseImage} />

            <span>Sign up</span>
            <input
                id="email"
                name="email"
                type="input"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <button
                onClick={() => {
                    if (email && password) {
                        dispatch(signUp({ email, password }));
                    }
                }}
            >
                Create new user
            </button>
        </div>
    );
};
