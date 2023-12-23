import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('YOur currennt user', currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            return unSubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email, password)

        
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserByGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleAuthProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const authInfo = {

        user,
        loading,
        createUser,
        logInUser,
        createUserByGoogle,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;