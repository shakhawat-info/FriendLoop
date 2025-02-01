import { Box, Divider, Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import cover from '../assets/cover.jpg';

// component
import EiditModal from '../components/EiditModal';

// icons
import { CiEdit } from "react-icons/ci";

const Profile = () => {
    // current user data
    const data = useSelector((state)=>state.user.value);
  return (
    <Paper sx={{overflowY: 'scroll' , paddingRight: 2 , transition: '.8s'}} className='no-scrollbar' >
        
        {/*  cover profile image */}
        <div className="relative w-full h-[400px]">
          <img src={cover} alt="cover photo" className=' w-full h-full object-cover ' /> 
          <img src={data.photoURL} alt="profile" className='absolute bottom-0 right-0 w-[150px] h-[150px] rounded-[15px] rounded-br-none  ' />
        </div>

        <Divider/>

        {/* profile bio */}
        <Box sx={{display: 'flex'}}>
          <Box sx={{width: '60%' , padding: '20px 0'}}>
          <h4 className=' text-[14px] text-center '>
            <span className='block'>"আমি ব্যর্থতা কে মেনে নিতে পারি</span>
            <span className='block'>কিন্তু আমি চেষ্টা না করাকে মেনে নিতে পারিনা"</span>
            <span className='block'>_মাইকেল জর্ডান</span>
          </h4>
          </Box>
          <EiditModal/>
          <Box sx={{textAlign: 'right' , width: '40%' , padding: '5px 0'}} >
            <h2 className='font-Aldrich font-bold text-xl '>{data.displayName}</h2>
            <h5 className='font-Ubuntu flex justify-end items-center gap-1 '><span>{data.metadata.createdAt}</span><CiEdit className='text-xl cursor-pointer '/></h5>
          </Box>
        </Box>
    </Paper>
  )
}

export default Profile