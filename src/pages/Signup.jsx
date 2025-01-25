import React, { useState } from "react";

// components
import { Button, TextField } from "@mui/material";
import { Link } from "react-router";

// icons
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Name func
    let [name , setName] = useState('') ;
    let [isname , setIsname] = useState(false)
    let [namErr , setNamErr] = useState('');
    let nameSet = (e)=>{
        setName(e.target.value);
        setNamErr('')
    }

    // Email func
    let [email , setEmail] = useState('');
    let [isemail , setIsemail] = useState(false);
    let [mailErr , setMailErr] = useState('');
    let mailSet = (e)=>{
        setEmail(e.target.value);
        setMailErr('')
    }

    // password func
    let [password , setPassword] = useState('');
    let [ispassword , setIspassword] = useState(false);
    let [passErr , setPassErr] = useState('');
    let passSet = (e)=>{
        setPassword(e.target.value);
        setPassErr('')
    }

    // signUp
    let signUp = ()=>{

        // name check
        if(!name){
            setNamErr('Name can not be empty!')
        }
        else{
            if(name.length < 4){
                setNamErr('The name must be at least 4 charecters long.');
                console.log('4 charecters long');
                
            }else{
                if(/^[a-zA-Z]+(\.[ ]?[a-zA-Z]+)*$/.test(name)){
                    setIsname(true);
                }else{
                    setNamErr('invalid name or spacing.')
                }
            }
        }


        // email check
        if(!email){
            setMailErr('Mail can not be empty!')
        }
        else{
            if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
                setIsemail(true);
            }
            else{
                setMailErr('Invalid email!');
            }
        }


        // Password check
        if(!password){
            setPassErr('Password can not be empty!')
        }
        else{
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password)){
                setIspassword(true);
            }
            else{
                setPassErr("The password must be at least 8 charecters and includes (A-Z , a-z , 0-9 , symbol '! @ #' )")
            }
        }

    }

  return (
    <div className="  ">
    <div className="flex flex-col justify-center h-screen w-2/5 mx-auto   ">
      {/* welcome */}
      <div className="">
        <h2 className="font-Aldrich font-bold text-2xl text-darkPrimary  ">
          Sign Up
        </h2>
        <p className="font-Ubuntu ">
          Welcome to our <span className="text-brand relative EffUnderline ">FriendLoop</span>
        </p>
      </div>

      {/* Name */}
      <div className="mt-10">
        <TextField onChange={nameSet} id="Name" label="Full Name" variant="outlined" sx={{".MuiOutlinedInput-input":{padding: '10px'} , ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root":{top: '-6px'} , ".MuiInputBase-root input": {color: 'gray'}}} className="w-full    " placeholder="Your Name"/>
        {namErr && <p className="text-brand font-Ubuntu ">{namErr}</p>}
      </div>

      {/* email */}
      <div className="mt-5">
        <TextField onChange={mailSet} id="email" type="email" label="Email" variant="outlined" sx={{".MuiOutlinedInput-input":{padding: '10px'} , ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root":{top: '-6px'} , ".MuiInputBase-root input": {color: 'gray'}}} className="w-full    " placeholder="Your Email"/>
        {mailErr && <p className="text-brand font-Ubuntu ">{mailErr}</p>}
      </div>


      {/* BirthDay */}
      <div className="mt-5">
        <TextField id="birth" type="date" label="Birth Date" variant="outlined" sx={{".MuiOutlinedInput-input":{padding: '10px'} , ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root":{top: '-6px'} , ".MuiInputBase-root input": {color: 'gray'} , "label": {backgroundColor: 'white' , paddingRight: '20px' , left: '-2px'} , "label.css-113d811-MuiFormLabel-root-MuiInputLabel-root": {backgroundColor: 'transparent' , padding: '0px'}}} className="w-full    " placeholder="Your Birthday"/>
      </div>

      {/* Password */}
      <div className="mt-5 relative">
        <TextField onChange={passSet} type={showPassword ? "text" : "password"} id="password" label="Password" variant="outlined" sx={{".MuiInputBase-root input":{padding: '10px'}, ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root " : {top: '-6px'}}} className="w-full    "   placeholder="password"/>
        { showPassword ?  
        < GoEye  className="absolute top-[4px] right-[0px] text-xl cursor-pointer p-2 box-content   " onClick={()=> setShowPassword ( prevState => !prevState)}/>
        : 
        < GoEyeClosed  className="absolute top-[4px] right-[0px] text-xl cursor-pointer p-2 box-content   " onClick={()=> setShowPassword ( prevState => !prevState)}/>
        }
        {passErr && <p className="text-brand font-Ubuntu ">{passErr}</p>}
      </div>

      {/* signIN Button */}
      <div className="">
        <span className="loader"></span>
        <Button onClick={signUp} variant="outlined" endIcon={<AiOutlineLogin />} className="w-full"> SignUp </Button>
      </div>

      {/* SignIn with */}
      <div className="mt-[100px]">
        <h4 className="font-Ubuntu text-lg mt-10 text-center  ">You have an account already? Please <Link to="/" className="text-brand EffUnderline relative">Login</Link>.</h4>
      </div>
    </div>
  </div>
  )
}

export default Signup