import { useEffect, useState } from "react";

import { GoogleAuthProvider, getAuth,signInWithPopup, signOut,onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, sendPasswordResetEmail } from "firebase/auth";

import initilizeAuthentication from "../Firebase/initilizeAuthentication";

initilizeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    

  const [user,setUser] = useState({});
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsloading] = useState(true)

  const auth = getAuth()

  const handleGoogleSignIn = () => {
    setIsloading(false)
    return  signInWithPopup(auth, googleProvider)
    .finally(()=> setIsloading(false))
  }
  const logOut = () =>{
    setIsloading(true)
    signOut(auth)
    .then( () => { } )
    .finally( () => setIsloading(false))
    
}
  useEffect(()=>{
    onAuthStateChanged(auth, user =>{
        if (user){
            setUser(user);
        }
        else {
          setUser({})
        }
        setIsloading(false)
    });
},[])
  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleNameChange = e =>{
       setName(e.target.value) 
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        
      })
      .catch(error => {
        setError(error.message);
      })
  }

 
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
       
      })
      .catch(error => {
        setError(error.message);
      })
  }
  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(result =>{
      console.log(result)
    })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
    .then(result =>{

    })
  }
// start password reset task-----
const resetPassBtn =()=>{
  sendPasswordResetEmail(auth,email)
  .then(result=>{

  })
}
 return{
    handleGoogleSignIn ,
    logOut,
    user,
    error,
    resetPassBtn,
    toggleLogin,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    isLogin,
    isLoading

 }
}
export default useFirebase;