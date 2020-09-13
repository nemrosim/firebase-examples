import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import okImage from '../../assets/ok.png';
import { firebase_app } from '../../api/firebase';
import { useDispatch } from 'redux-react-hook';
import { signOut } from '../../store/auth/signOut';

export const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState();

    firebase_app.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            setUser(user);
        } else {
            setUser(undefined);
        }
    });

    return (
        <div className="nav-bar">
            <div className="menu">
                {user && (
                    <>
                        <img src={okImage} />
                        <button onClick={() => dispatch(signOut())}>Logout</button>
                    </>
                )}
                <Link className="menu-item" to={'/sign-in'}>
                    Sign-in
                </Link>
                <Link className="menu-item" to={'/sign-in-with-popup'}>
                    Sign-in popup
                </Link>
                <Link className="menu-item" to={'/sign-up'}>
                    Sign-up
                </Link>
                {user && (
                    <>
                        <Link className="menu-item" to={'/set-profile-data'}>
                            Set profile data
                        </Link>
                        <Link className="menu-item" to={'/get-profile-data'}>
                            Get profile data
                        </Link>
                        <Link className="menu-item" to={'/update-profile-data'}>
                            Update profile data
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};
