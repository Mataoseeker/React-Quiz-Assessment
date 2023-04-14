import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
    } from "firebase/auth";
import { auth } from "../firebase";

 export const UserContext = createContext();

 

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [score, setScore] = useState(0)
   

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unsubscribe;

    }, [])
    
    return (
        <UserContext.Provider value={{createUser, user, logOut, signIn, score, setScore}}>
        {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
}