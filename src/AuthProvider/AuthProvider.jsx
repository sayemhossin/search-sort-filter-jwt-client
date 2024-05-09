import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase";
import axios from "axios";



export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    


    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    


    const logOut = () =>{
        setLoading(true)
        axios('https://jwt-practice-server.vercel.app/logout',{withCredentials:true})
        return signOut(auth)
    }
    




    useEffect(()=>{
        const Unsubscribe =   onAuthStateChanged(auth , currentUser =>{
      setUser(currentUser)
      setLoading(false)
          })
      
      return () =>{
          return Unsubscribe()
      }
      
      
      },[])
      

   const info = {
    user,
    loading,
    createUser,
    signIn,
    logOut
}
 
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;