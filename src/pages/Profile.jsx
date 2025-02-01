import { Box, Divider, Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import cover from '../assets/cover.jpg';

const Profile = () => {
    // current user data
    const data = useSelector((state)=>state.user.value);
  return (
    <Paper >
        
        {/*  cover profile image */}
        <div className="relative w-full h-[400px]">
          <img src={cover} alt="cover photo" className=' w-full h-full object-cover ' /> 
          <img src={data.photoURL} alt="profile" className='absolute bottom-0 right-0 w-[150px] h-[150px] rounded-[15px] rounded-br-none  ' />
        </div>

        <Divider/>

        {/* profile bio */}
        <Box sx={{display: 'flex'}}>
          <Box sx={{width: '60%' }}>
          <h4 className='text-clrthird text-[14px] lg:text-nor'>
            <span className='block'>"আমি ব্যর্থতা কে মেনে নিতে পারি</span>
            <span className='block'>কিন্তু আমি চেষ্টা না করাকে মেনে নিতে পারিনা"</span>
            <span className='block'>_মাইকেল জর্ডান</span>
          </h4>
          </Box>
          <Box sx={{textAlign: 'right' , width: '40%'}} >
            <h2>{data.displayName}</h2>
          </Box>
        </Box>
    </Paper>
  )
}

export default Profile