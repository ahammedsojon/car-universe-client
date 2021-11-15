import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Fireabase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();

    const createNewUser = (email, password, name, image, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser({ displayName: name, email, photoURL: image });
                saveUser(name, email);
                updateUserProfile(name, image);
                history.replace('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setLoading(false));
    }

    const logInUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const redirect_uri = location?.state?.from || '';
                history.replace(redirect_uri);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    }

    const updateUserProfile = (name, image)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image}).then(() => {
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const saveUser = (name, email)=>{
        const user = {name, email};
        axios.post('http://localhost:5000/users',{
            user
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => console.log((res)));
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => setAdmin(res.data.admin));
    }, [user?.email, admin])
console.log(token);
    return {
        user,
        loading,
        createNewUser,
        logInUser,
        logOut,
        admin,
    }

}
export default useFirebase;