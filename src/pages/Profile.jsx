import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from "firebase/database";


// image
import cover from '../assets/cover.jpg';

// component
import { Box, Button, Divider, FormControl, IconButton, InputLabel, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Select, TextField  } from '@mui/material'
import { styled } from '@mui/material/styles';
import EiditModal from '../components/EiditModal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';





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
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { CiImageOn } from "react-icons/ci";
import { MdVideoLibrary } from "react-icons/md";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsCameraReels } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import PollIcon from '@mui/icons-material/Poll';






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
    const [postbtn , setPostbtn] = useState(false);
    const [postFilter , setPostFilter] = useState('all')


    // grid Item
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
      }),
    }));

    useEffect(()=>{
      onValue(usersRef, (snapshot) => {
        snapshot.forEach((item)=>{
          if(item.key == dataID) setProfile({...item.val()})
        })
    });
    console.log(dataID);
    
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


// post button function
const handleStatus = (e)=>{
  console.log(e.target.value);
  
if(e.target.value){
  setPostbtn(true)
}
else{
  setPostbtn(false)
}
}


// post filter
const allpost = ()=>{
  setPostFilter('all')
}

const imagepost = ()=>{
  setPostFilter('image')
}
  
const videopost = ()=>{
  setPostFilter('video')
}

const textpost = ()=>{
  setPostFilter('text')
}

const linkpost = ()=>{
  setPostFilter('link')
}

const pollpost = ()=>{
  setPostFilter('poll')
}


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
          <Box sx={{width: '100%'}}>
          {/* post box */}

            <Box sx={{ width: '100%', height: ispost ? 550 : 100 , transition: '.6s' ,  borderRadius: 2, boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' , overflow: 'hidden'}}>
              <Box sx={{  padding: 2 , display: 'flex', gap: 2 , position: 'relative'}}>
                <img src={profile.photoURL} alt="profile" className='rounded-full w-[70px] h-[70px]  '/>
                {!ispost && <input type="text" name="" id="" placeholder="what's on your mind" className='outline-0 w-full  ' onClick={()=>setIspost(true)}/> }
                {ispost && <Button variant="contained"  sx={{position: 'absolute' , top: 0 , right: 0}} onClick={()=> setIspost(false)}> <CloseIcon /> </Button>  }
              </Box>
              <Box sx={{width: '100%' , height: '100%' }}>

                <TextField onChange={handleStatus} id="outlined-multiline-static" label="Status" multiline rows={4} sx={{width: '98%' , margin: '30px 20px' , boxSizing: 'border-box' }}  />

                <Box sx={{padding: '0 20px' , display : 'flex' , justifyContent: 'space-between'}} >
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Privacy</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={postprivacy}
                    label="Age"
                    onChange={handlepostprivacy}
                    sx={{'.css-1ll44ll-MuiOutlinedInput-notchedOutline': {borderRadius: '30px'},
                          '.css-rnk950-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{padding: '5px 30px 5px 20px'},
                         '.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{padding: '5px 30px 5px 20px'}
                       }}
                  >
                    <MenuItem value="public"> <PublicIcon/> <span>Public</span></MenuItem>
                    <MenuItem value="friends"> <PeopleAltIcon/> <span>Friends</span></MenuItem>
                    <MenuItem value="only me"> <LockPersonIcon/> <span>Only me</span></MenuItem>
                  </Select>
                </FormControl>
                <Box>
                  <IconButton aria-label="delete" size="large"> <TagIcon /> </IconButton>
                  <IconButton aria-label="delete" size="large"> <AlternateEmailIcon /> </IconButton>
                  <IconButton aria-label="delete" size="large"> <AddReactionIcon /> </IconButton>
                </Box>
                </Box>

                {/* post options */}
                <Grid container spacing={2} className='px-5'>
                 <Grid item xs={4} sx={{'.css-16carsw-MuiPaper-root':{boxShadow: 'none'}}}  >
                   <Item  >
                     <ListItem disablePadding sx={{
                      '.css-4bx69l-MuiButtonBase-root-MuiListItemButton-root':{justifyContent: 'center' , gap: '10px'},
                      '.css-cfq8qh-MuiListItemText-root':{flex:0},
                      '.css-cokf1l-MuiListItemIcon-root':{minWidth: 'fit-content'},
                      }} className='border-2 border-black/10 rounded-[5px]' >
                      <ListItemButton>
                        <ListItemIcon>
                          <CiImageOn className='text-2xl'/>
                        </ListItemIcon>
                        <ListItemText primary="image" />
                      </ListItemButton>
                    </ListItem>
                   </Item>
                 </Grid>
                 <Grid item xs={4} sx={{'.css-16carsw-MuiPaper-root':{boxShadow: 'none'}}}>
                   <Item >                      
                    <ListItem disablePadding sx={{
                      '.css-4bx69l-MuiButtonBase-root-MuiListItemButton-root':{justifyContent: 'center' , gap: '10px'},
                      '.css-cfq8qh-MuiListItemText-root':{flex:0},
                      '.css-cokf1l-MuiListItemIcon-root':{minWidth: 'fit-content'},
                      }} className='border-2 border-black/10 rounded-[5px]' >
                      <ListItemButton>
                        <ListItemIcon>
                          <MdVideoLibrary className='text-2xl'/>
                        </ListItemIcon>
                        <ListItemText primary="video" />
                      </ListItemButton>
                    </ListItem>
                  </Item>
                 </Grid>
                 <Grid item xs={4} sx={{'.css-16carsw-MuiPaper-root':{boxShadow: 'none'}}}>
                   <Item >
                    <ListItem disablePadding sx={{
                      '.css-4bx69l-MuiButtonBase-root-MuiListItemButton-root':{justifyContent: 'center' , gap: '10px'},
                      '.css-cfq8qh-MuiListItemText-root':{flex:0},
                      '.css-cokf1l-MuiListItemIcon-root':{minWidth: 'fit-content'},
                      }} className='border-2 border-black/10 rounded-[5px]' >
                      <ListItemButton>
                        <ListItemIcon>
                          <BiPhotoAlbum className='text-2xl'/>
                        </ListItemIcon>
                        <ListItemText primary="album" />
                      </ListItemButton>
                    </ListItem>
                   </Item>
                 </Grid>
                 <Grid item xs={4} sx={{'.css-16carsw-MuiPaper-root':{boxShadow: 'none'}}}>
                   <Item  >
                    <ListItem disablePadding sx={{
                      '.css-4bx69l-MuiButtonBase-root-MuiListItemButton-root':{justifyContent: 'center' , gap: '10px'},
                      '.css-cfq8qh-MuiListItemText-root':{flex:0},
                      '.css-cokf1l-MuiListItemIcon-root':{minWidth: 'fit-content'},
                      }} className='border-2 border-black/10 rounded-[5px]' >
                      <ListItemButton>
                        <ListItemIcon>
                          <IoColorPaletteOutline className='text-2xl'/>
                        </ListItemIcon>
                        <ListItemText primary="color" />
                      </ListItemButton>
                    </ListItem>
                   </Item>
                 </Grid>
                 <Grid item xs={4} sx={{'.css-16carsw-MuiPaper-root':{boxShadow: 'none'}}}>
                   <Item  >
                    <ListItem disablePadding sx={{
                      '.css-4bx69l-MuiButtonBase-root-MuiListItemButton-root':{justifyContent: 'center' , gap: '10px'},
                      '.css-cfq8qh-MuiListItemText-root':{flex:0},
                      '.css-cokf1l-MuiListItemIcon-root':{minWidth: 'fit-content'},
                      }} className='border-2 border-black/10 rounded-[5px]' >
                      <ListItemButton>
                        <ListItemIcon>
                          <BsCameraReels className='text-2xl'/>
                        </ListItemIcon>
                        <ListItemText primary="reels" />
                      </ListItemButton>
                    </ListItem>
                   </Item>
                 </Grid>
                 <Grid item xs={4} sx={{'.css-16carsw-MuiPaper-root':{boxShadow: 'none'}}}>
                   <Item  >
                    <ListItem disablePadding sx={{
                      '.css-4bx69l-MuiButtonBase-root-MuiListItemButton-root':{justifyContent: 'center' , gap: '10px'},
                      '.css-cfq8qh-MuiListItemText-root':{flex:0},
                      '.css-cokf1l-MuiListItemIcon-root':{minWidth: 'fit-content'},

                      }} className='border-2 border-black/10 rounded-[5px]' >
                      <ListItemButton>
                        <ListItemIcon>
                          <CiFaceSmile className='text-2xl'/>
                        </ListItemIcon>
                        <ListItemText primary="fellings" />
                      </ListItemButton>
                    </ListItem>
                   </Item>
                 </Grid>
                 </Grid>

                 <Box sx={{margin: '10px 20px', display: 'flex' , justifyContent: 'end'}}><Button  variant={postbtn ? 'contained' : 'outlined'} endIcon={<SendIcon />}> Post</Button></Box>


              </Box>
            </Box>

          {/* post filtters */}
          <Box sx={{margin: '20px 0' , display: 'flex' , gap:2}}>
            <Button onClick={allpost} variant={postFilter == 'all' ? 'contained' : 'outlined'} startIcon={<AlignHorizontalLeftIcon />}>All</Button>
            <Button onClick={imagepost} variant={postFilter == 'image' ? 'contained' : 'outlined'} startIcon={<CiImageOn />}>image</Button>
            <Button onClick={videopost} variant={postFilter == 'video' ? 'contained' : 'outlined'} startIcon={<MdVideoLibrary />}>videos</Button>
            <Button onClick={textpost} variant={postFilter == 'text' ? 'contained' : 'outlined'} startIcon={<ArticleIcon />}>text</Button>
            <Button onClick={linkpost} variant={postFilter == 'link' ? 'contained' : 'outlined'} startIcon={<LinkIcon />}>links</Button>
            <Button onClick={pollpost} variant={postFilter == 'poll' ? 'contained' : 'outlined'} startIcon={<PollIcon />}>polls</Button>
          </Box>
          </Box>

          {/* about box */}
          <Box sx={{width: profiletab == 5 ? 800 : 0 , borderRadius: 2 , transition: '.4s' , overflow: 'hidden' , boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>about</Box>
        </Box>



    </Paper>
  )
}

export default Profile