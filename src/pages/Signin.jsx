import React, { useState } from "react";

// components
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Link } from "react-router";

// icons
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="  ">
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
          <TextField id="userName" label="User Name" variant="outlined" sx={{".MuiOutlinedInput-input":{padding: '10px'} , ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root":{top: '-6px'} , ".MuiInputBase-root input": {color: 'gray'}}} className="w-full    " placeholder="UserName or Email"/>
        </div>
        {/* Password */}
        <div className="mt-5 relative">
          <TextField type={showPassword ? "text" : "password"} id="password" label="Password" variant="outlined" sx={{".MuiInputBase-root input":{padding: '10px'}, ".css-19qnlrw-MuiFormLabel-root-MuiInputLabel-root " : {top: '-6px'}}} className="w-full    "   placeholder="password"/>
          { showPassword ?  
          < GoEye  className="absolute top-[4px] right-[0px] text-xl cursor-pointer p-2 box-content   " onClick={()=> setShowPassword ( prevState => !prevState)}/>
          : 
          < GoEyeClosed  className="absolute top-[4px] right-[0px] text-xl cursor-pointer p-2 box-content   " onClick={()=> setShowPassword ( prevState => !prevState)}/>
          }
        </div>

        {/* remember/forget */}
        <div className="flex items-center justify-between  ">
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          <Link to="" className="EffUnderline relative text-brand font-Ubuntu text-lg   ">Forget Password?</Link>
        </div>

        {/* signIN Button */}
        <div className="">
          <span className="loader"></span>
          <Button variant="outlined" endIcon={<AiOutlineLogin />}> SignIn </Button>
        </div>

        {/* SignIn with */}
        <div className="mt-[100px]">
          <h3 className="font-Aldrich text-lg text-center  ">SignIn with</h3>
          <div className="flex justify-center gap-x-5 mt-5">
            <Button variant="outlined" endIcon={<FcGoogle />}> Google </Button>
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
