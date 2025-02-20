import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {darktheme} from '../redux-store/features/dark-light theme/themeSlice';
import { menushort } from '../redux-store/features/menuShort/menushortSlice';
import { useLocation, useNavigate } from 'react-router';
import { otherUser } from '../redux-store/features/otherUser/OtherUserSlice';
import { alluser } from '../redux-store/features/alluser/alluserSlice';

// components
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ActiveNav from './ActiveNav';

// icons
import LightModeIcon from '@mui/icons-material/LightMode';
import ListItemIcon from '@mui/material/ListItemIcon';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AppsIcon from '@mui/icons-material/Apps';
import { FcSettings } from "react-icons/fc";
import { Box, Button, ListItemButton, Modal, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MdContactSupport } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { FcMindMap } from "react-icons/fc";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import { FcAbout } from "react-icons/fc";
import { RiLogoutCircleRLine } from "react-icons/ri";



export default function MenuSide() {
  // current user data
  const data = useSelector((state)=>state.user.value);
  const themeMode = useSelector((state)=>state.theme.value);
  const menuExtend = useSelector((state)=>state.menushort.value);
  const [menuWidth , setMenuWidth] = React.useState(370)
  const dispatch = useDispatch();
  const [issetting , setIsetting] = React.useState(false);
  const [isHelp , setIsHelp] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [ismodal , setIsmodal] = React.useState(false)
  
  // dark-light theme
  const handleTheme = ()=>{
    dispatch(darktheme())
    localStorage.setItem("DarkLightTheme" , JSON.stringify(themeMode));
  }

  // menuView option
  let menuView = ()=>{
    dispatch(menushort())
  }

  React.useEffect(()=>{
    if(menuExtend) setMenuWidth(450);
    if(!menuExtend) setMenuWidth(100);
  },[menuExtend])


  // navigate to profile
  let NavtoHome = ()=>{
    navigate('/')
  }

  // navigate to profile
  let NavtoProfile = ()=>{
    navigate('/profile')
    dispatch(otherUser(data.uid))
    localStorage.setItem('profileID' , data.uid)
  }

  // navigate to friends
  let NavtoFriends = ()=>{
    navigate('/friend')
    dispatch(alluser())
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <Paper  sx={{position: 'relative' ,  width: menuWidth, maxWidth: '100%' , height: '100vh', transition: '.8s', overflowY: 'scroll' , borderRadius:0   }} className='no-scrollbar border-r border-r-white/20 font-Aldrich '>
      <div className={`flex pl-3 pt-3 gap-3  `}>
        {menuExtend && <img src={data.photoURL} alt="profile" className='w-[100px] h-[100px] rounded-[20px]    '/>}

        {/* menu view option */}
        <button onClick={menuView} type="button" className={`cursor-pointer bg-[#52565e] fixed duration-[1s] top-[10px] z-[1] ${menuExtend ? 'left-[345px]': 'left-[10px]'}  w-[40px] h-[40px] rounded-full border-2 border-white    `}>
          {menuExtend ? <KeyboardArrowLeftIcon className={`${themeMode && 'text-white'}`}/> : <KeyboardArrowRightIcon className={`${themeMode && 'text-white'}`}/>}
        </button>
        
        <div className={` w-full  ${menuExtend ? ' pr-5':'mt-10'} duration-[.4s]`}>
          {menuExtend && <h2 className={`font-Aldrich ${menuExtend ? 'whitespace-wrap':'whitespace-nowrap'}`}>{data.displayName}</h2>}
          {menuExtend && <p className='font-Aldrich text-[13px]   '>user name</p>}
          <Divider sx={{marginTop: 1}}/>
          <div className={`flex justify-around  mt-3 ${!menuExtend && 'flex-col gap-5 '} `}>

          {/* theme options */}
            <button type="button" onClick={handleTheme } className=' cursor-pointer '>
              {themeMode ? <LightModeIcon/> : <NightsStayIcon/>}
            </button>
            <button type="button"><PersonPinIcon /></button>
          </div>
        </div>
      </div>
      <Divider sx={menuExtend ? {marginTop: 2} : {marginTop: 4}}/>
      <MenuList sx={{display: 'flex' , flexDirection: 'column', gap: 1}}>
        <MenuItem onClick={NavtoHome}>
        {location.pathname == '/' && <ActiveNav/>}
          <ListItemIcon>
            <AppsIcon fontSize="large" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Home</ListItemText>}
        </MenuItem>
        <MenuItem onClick={NavtoProfile}>
          {location.pathname == '/profile' && <ActiveNav/>}
          <ListItemIcon>
            <PersonPinIcon fontSize="large" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Profile</ListItemText>}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ChatIcon fontSize="large" />
          </ListItemIcon>
          {menuExtend && <ListItemText >Messages</ListItemText>}
        </MenuItem>
        <MenuItem onClick={NavtoFriends}>
          <ListItemIcon>
            <SupervisedUserCircleIcon fontSize="large" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Friends</ListItemText>}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CircleNotificationsIcon fontSize="large" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Notifications</ListItemText>}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PlayCircleOutlineIcon fontSize="large" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Video</ListItemText>}
        </MenuItem>
      </MenuList>

      <Divider />

      <MenuItem onClick={()=>setIsetting(!issetting)}  >
        <ListItemIcon>
          <FcSettings fontSize="35px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Setting & Privacy</ListItemText>}
        {menuExtend && <Button>{issetting ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }</Button>}
      </MenuItem>

      {/* setting options */}
      <div style={{height: issetting ? 200 : 0, flexDirection: 'column' , alignItems: 'start' , transition: '.4s' , padding: 0, margin: 0 , overflow: 'hidden'}}>
          <ListItemButton sx={{ pl: 5}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <ManageAccountsIcon fontSize="large"/>
            </ListItemIcon>
            {menuExtend && <ListItemText primary="Account Setting" />}
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <AccountBalanceWalletIcon fontSize="large"/>
            </ListItemIcon>
            {menuExtend && <ListItemText primary="Order & Payments" />}
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <GTranslateIcon fontSize="large"/>
            </ListItemIcon>
            {menuExtend && <ListItemText primary="Languages" />}
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <FcMindMap className='text-3xl'/>
            </ListItemIcon>
            {menuExtend && <ListItemText primary="Activity log" />}
          </ListItemButton>
      </div>

      <hr className={` w-full  ${themeMode ? ' text-black/10 ': ' text-gray-300/20'}`} />

      <MenuItem onClick={()=> setIsHelp(!isHelp)}>
        <ListItemIcon>
          <MdContactSupport fontSize="40px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Help & Support</ListItemText>}
        {menuExtend && <Button>{ isHelp ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</Button>}
      </MenuItem>
      <div className={`${isHelp ? 'h-[150px]':'h-[0px]'} overflow-hidden duration-500 `}>
      <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
        <ListItemIcon sx={{minWidth: 35}}>
          <LiaHandsHelpingSolid fontSize="35px"/>
        </ListItemIcon>
        {menuExtend && <ListItemText primary="Help" />}
      </ListItemButton>
      <ListItemButton sx={{ pl: 5, minWidth: 10}}>
        <ListItemIcon sx={{minWidth: 35}}>
          <MoveToInboxIcon fontSize="large"/>
        </ListItemIcon>
        {menuExtend && <ListItemText primary="Support Inbox" />}
      </ListItemButton>
      <ListItemButton sx={{ pl: 5, minWidth: 10}}>
        <ListItemIcon sx={{minWidth: 35}}>
          <NotificationImportantIcon fontSize="large"/>
        </ListItemIcon>
        {menuExtend && <ListItemText primary="Report for problem" />}
      </ListItemButton>
      </div>
      
      <hr className={` w-full  ${themeMode ? ' text-black/10 ': ' text-gray-300/20'}`} />

      <MenuItem>
        <ListItemIcon>
          <FcAbout fontSize="35px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>About FriendLoop</ListItemText>}
      </MenuItem>
      <MenuItem onClick={()=>setIsmodal(true)}>
        <ListItemIcon>
          <IoIosLogOut fontSize="35px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Log out</ListItemText>}
      </MenuItem>

      {/* modal */}
      {ismodal && 
      <Modal
        open={ismodal}
        onClose={()=> setIsmodal(false)}
      >
        <Box sx={style}>
          <h2>You are trying to logout from FriendLoop!</h2>
          <h3>Are you sure?</h3>
          
          <Box sx={{display:'flex' , justifyContent:'space-between', marginTop:'30px'}} >
            <Button variant="outlined" onClick={()=>setIsmodal(false)}>no</Button>
            <Button variant='contained' endIcon={<RiLogoutCircleRLine/>} >yes</Button>
          </Box>
        </Box>
      </Modal>
      }
    </Paper>
  );
}
