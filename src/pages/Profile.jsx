import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from "firebase/database";


// image
import cover from '../assets/cover.jpg';

// component
import { Box, Button, Divider, FormControl, IconButton, InputLabel, MenuItem, Paper, Select  } from '@mui/material'
import EiditModal from '../components/EiditModal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';





// icons
import { CiEdit } from "react-icons/ci";
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TagIcon from '@mui/icons-material/Tag';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddReactionIcon from '@mui/icons-material/AddReaction';






const Profile = () => {
    // current user data
    const dataID = useSelector((state)=>state.otherUser.value);

    // database
    const db = getDatabase();
    const usersRef = ref(db, 'users/');

    // others states
    const [profile , setProfile] = useState({});
    const [ispost , setIspost] = useState(false);
    const [postprivacy, setPostprivacy] = React.useState('public');



    useEffect(()=>{
      onValue(usersRef, (snapshot) => {
        snapshot.forEach((item)=>{
          if(item.key == dataID) setProfile({...item.val()})
        })
    });
    
  },[])
  
  
// active profile nav function
const [profiletab, setProfiletab] = React.useState(0);
const handleChange = (event, newValue) => {
  setProfiletab(newValue);
};


// post privacy setting
const handlepostprivacy = (event) => {
  setPostprivacy(event.target.value);
};
  
  

  return (
    <Paper sx={{overflowY: 'scroll' , paddingRight: 2 , transition: '.8s'}} className='no-scrollbar' >
        
        {/*  cover profile image */}
        <div className="relative w-full h-[400px]">
          <img src={cover} alt="cover photo" className=' w-full h-full object-cover ' /> 
          <img src={profile.photoURL} alt="profile" className='absolute bottom-0 right-0 w-[150px] h-[150px] rounded-[15px] rounded-br-none  ' />
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
          {/* <EiditModal/> */}
          <Box sx={{textAlign: 'right' , width: '40%' , padding: '20px 20px 20px 0'}} >
            <h2 className='font-Aldrich font-bold text-2xl '>{profile.displayName}</h2>
            <h5 className='font-Ubuntu flex justify-end items-center gap-1 '><span>{profile.metadata?.createdAt}</span><CiEdit className='text-xl cursor-pointer '/></h5>
            <Box sx={{padding : '20px 0', display: 'flex' , justifyContent: 'end' , gap: '20px'}}  >
              
              {profile.uid == dataID ? 
              <Button variant="contained" startIcon={<AddIcon />}>add story</Button>:
              <Button variant="contained" startIcon={<SendIcon />}>message</Button>}

              {profile.uid == dataID ? 
              <Button variant="outlined" startIcon={<ModeEditIcon />}>edit profile</Button> : 
              <Button variant="outlined" startIcon={<MessageIcon />}>message</Button> }
              <Button variant="outlined" startIcon={<MoreHorizIcon />}>more</Button> 

            </Box>
          </Box>
        </Box>

        <Divider/>

        {/* profile tabs */}

        <Box sx={{ width: '100%' , padding: '10px 50px' , position: 'relative' }}>
          <Tabs onChange={handleChange} value={profiletab} aria-label="focus" selectionFollowsFocus >
            <Tab label="posts" />
            <Tab label="friends" />
            <Tab label="groups" />
            <Tab label="musics" />
            <Tab label="books" />
            <Tab label="about" sx={{position:'absolute' , top:'0px' , right: '0px'}} />
          </Tabs>
        </Box>

        <Divider/>

        {/* posts and about tabs */}
        <Box sx={{display: 'flex' , gap: 2 , justifyContent: 'space-between' , padding:'10px 50px'}}  >
          {/* post box */}
          <Box sx={{ width: '100%', height: ispost ? 700 : 100 , transition: '.6s' ,  borderRadius: 2, boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' , overflow: 'hidden'}}>
            <Box sx={{  padding: 2 , display: 'flex', gap: 2 , position: 'relative'}}>
              <img src={profile.photoURL} alt="profile" className='rounded-full w-[70px] h-[70px]  '/>
              {!ispost && <input type="text" name="" id="" placeholder="what's on your mind" className='outline-0 w-full  ' onClick={()=>setIspost(true)}/> }
              {ispost && <Button variant="contained"  sx={{position: 'absolute' , top: 0 , right: 0}} onClick={()=> setIspost(false)}> <CloseIcon /> </Button>  }
            </Box>
            <Box sx={{width: '100%' , height: '100%' }}>
              <textarea name="post" id="post" placeholder="What's on your mind ?" className=' w-full py-2 px-5 outline-0 min-h-[150px]  '></textarea>
              <Box sx={{padding: '0 20px' , display : 'flex' , justifyContent: 'space-between'}} >
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Privacy</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={postprivacy}
                    label="Age"
                    onChange={handlepostprivacy}
                  >
                    <MenuItem value="public">public</MenuItem>
                    <MenuItem value="friends">friends</MenuItem>
                    <MenuItem value="only me">only me</MenuItem>
                  </Select>
                </FormControl>
                <Box>
                  <IconButton aria-label="delete" size="large"> <TagIcon /> </IconButton>
                  <IconButton aria-label="delete" size="large"> <AlternateEmailIcon /> </IconButton>
                  <IconButton aria-label="delete" size="large"> <AddReactionIcon /> </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* about box */}
          <Box sx={{width: profiletab == 5 ? 800 : 0 , borderRadius: 2 , transition: '.4s' , overflow: 'hidden' , boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>about</Box>
        </Box>



    </Paper>
  )
}

export default Profile