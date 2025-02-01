import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider , signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// components
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Link } from "react-router";
import Warning from "../components/Warning";


// icons
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {userSlice}  from "../redux-store/features/currentuser/currentuserSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const db = getDatabase();
  const auth = getAuth();
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();
  const [warning , setWarning] = useState('');


  // email func
  let [email , setEmail] = useState('')
  let emailSet = (e)=>{
    setEmail(e.target.value)
  }

  // password func
  let [password , setPassword] = useState('')
  let passSet = (e)=>{
    setPassword(e.target.value)
  }

  // SignIn with username
  let remembeRref = useRef()
  let SignIn = ()=>{
    // console.log(remembeRref.current.firstElementChild.checked);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      dispatch(userSlice({...user}))
      console.log(user);
    // set data to database
    set(ref(db, 'users/' + user.uid), {
      name: user.displayName,
      email: user.email,
      uid: user.uid ,
      metadata: {...user.metadata},
      photoURL: user.photoURL
    });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setWarning(error.code);
      setTimeout(() => {
        setWarning('');
      }, 3000);
    });
  }

  // google login
  let googleLogin = ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    
    // Dataset to redux and localstorage
    dispatch(userSlice({...user}))
    localStorage.setItem("user" , JSON.stringify({...user}))
    
    // set data to database
    set(ref(db, 'users/' + user.uid), {
      name: user.displayName,
      email: user.email,
      uid: user.uid ,
      metadata: {...user.metadata},
      photoURL: user.photoURL ,
    })
    
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    setWarning(errorCode);
  });
  }

  
  return (
    <div className=" relative ">
      <Warning er={warning}  />
      <div className="flex flex-col justify-center h-screen w-2/5 mx-auto   ">
        {/* welcome */}
        <div className="">
          <h2 className="font-Aldrich font-bold text-2xl text-darkPrimary  ">
            Sign In
          </h2>
          <p className="font-Ubuntu ">
            Welcome to our <span className="text-brand relative EffUnderline ">FriendLoop</span>
          </p>
        </div>

        {/* UserName */}
        <div className="mt-10">
          <TextField onChange={emailSet} id="userName" label="User Name" variant="outlined" sx={{".MuiOutlinedInput-input":{padding: '10px'} , ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root":{top: '-6px'} , ".MuiInputBase-root input": {color: 'gray'}}} className="w-full    " placeholder="UserName or Email"/>
        </div>
        {/* Password */}
        <div className="mt-5 relative">
          <TextField onChange={passSet} type={showPassword ? "text" : "password"} id="password" label="Password" variant="outlined" sx={{".MuiInputBase-root input":{padding: '10px'}, ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root " : {top: '-6px'}}} className="w-full    "   placeholder="password"/>
          { showPassword ?  
          < GoEye  className="absolute top-[4px] right-[0px] text-xl cursor-pointer p-2 box-content   " onClick={()=> setShowPassword ( prevState => !prevState)}/>
          : 
          < GoEyeClosed  className="absolute top-[4px] right-[0px] text-xl cursor-pointer p-2 box-content   " onClick={()=> setShowPassword ( prevState => !prevState)}/>
          }
        </div>

        {/* remember/forget */}
        <div className="flex items-center justify-between  ">
          <FormControlLabel   control={<Checkbox defaultChecked ref={remembeRref}/>} label="Remember me" />
          <Link to="" className="EffUnderline relative text-brand font-Ubuntu text-lg   ">Forget Password?</Link>
        </div>

        {/* signIN Button */}
        <div className="flex justify-end mt-5">
          <Button onClick={SignIn}  variant="outlined" endIcon={<AiOutlineLogin />}> SignIn </Button>
        </div>

        {/* SignIn with */}
        <div className="mt-[100px]">
          <h3 className="font-Aldrich text-lg text-center  ">SignIn with</h3>
          <div className="flex justify-center gap-x-5 mt-5">
            <Button onClick={googleLogin} variant="outlined" endIcon={<FcGoogle />}> Google </Button>
            <Button variant="outlined" endIcon={<FaFacebookF />}> Facebook </Button>
            <Button variant="outlined" endIcon={<SiGithub  className="text-black"/>}> Facebook </Button>
          </div>
          <h4 className="font-Ubuntu text-lg mt-10 text-center  ">You don't have an account? please <Link to="/signup" className="text-brand EffUnderline relative">create</Link> one.</h4>
        </div>
      </div>
    </div>
  );
};

export default Signin;
