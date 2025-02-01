import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {darktheme} from '../redux-store/features/dark-light theme/themeSlice';
import { menushort } from '../redux-store/features/menuShort/menushortSlice';
import { useLocation, useNavigate } from 'react-router';

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
import { Button, ListItemButton } from '@mui/material';
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
  const location = useLocation()
  
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
    if(!menuExtend) setMenuWidth(60);
  },[menuExtend])


  // navigate to profile
  let NavtoHome = ()=>{
    navigate('/')
    
  }

  // navigate to profile
  let NavtoProfile = ()=>{
    navigate('/profile')
    
  }


  return (
    <Paper sx={{position: 'relative' ,  width: menuWidth, maxWidth: '100%' , height: '100vh', transition: '.8s', overflowY: 'scroll' , borderRadius:0   }} className='no-scrollbar border-r border-r-white/20 font-Aldrich '>
      <div className={`flex pl-3 pt-3 gap-3  `}>
        {menuExtend && <img src={data.photoURL} alt="profile" className='w-[100px] h-[100px] rounded-[20px]    '/>}

        {/* menu view option */}
        <button onClick={menuView} type="button" className={`cursor-pointer bg-[#52565e] fixed duration-[1s] top-[10px] z-[1] ${menuExtend ? 'left-[335px]': 'left-[10px]'}  w-[40px] h-[40px] rounded-full border-2 border-white    `}>
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
            <AppsIcon fontSize="medium" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Home</ListItemText>}
        </MenuItem>
        <MenuItem onClick={NavtoProfile}>
          {location.pathname == '/profile' && <ActiveNav/>}
          <ListItemIcon>
            <PersonPinIcon fontSize="medium" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Profile</ListItemText>}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ChatIcon fontSize="medium" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Messages</ListItemText>}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SupervisedUserCircleIcon fontSize="medium" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Friends</ListItemText>}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CircleNotificationsIcon fontSize="medium" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Notifications</ListItemText>}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PlayCircleOutlineIcon fontSize="medium" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Video</ListItemText>}
        </MenuItem>
      </MenuList>

      <Divider />

      <MenuItem onClick={()=>setIsetting(!issetting)}  >
        <ListItemIcon>
          <FcSettings fontSize="25px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Setting & Privacy</ListItemText>}
        {menuExtend && <Button>{issetting ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }</Button>}
      </MenuItem>

      {/* setting options */}
      <div style={{height: issetting ? 200 : 0, flexDirection: 'column' , alignItems: 'start' , transition: '.4s' , padding: 0, margin: 0 , overflow: 'hidden'}}>
          <ListItemButton sx={{ pl: 5 }}>
            <ListItemIcon sx={{minWidth: 35}}>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Account Setting" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Order & Payments" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <GTranslateIcon />
            </ListItemIcon>
            <ListItemText primary="Languages" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <FcMindMap />
            </ListItemIcon>
            <ListItemText primary="Activity log" />
          </ListItemButton>
      </div>

      <hr className={` w-full  ${themeMode ? ' text-black/10 ': ' text-gray-300/20'}`} />

      <MenuItem onClick={()=> setIsHelp(!isHelp)}>
        <ListItemIcon>
          <MdContactSupport fontSize="25px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Help & Support</ListItemText>}
        {menuExtend && <Button>{ isHelp ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</Button>}
      </MenuItem>
      <div className={`${isHelp ? 'h-[150px]':'h-[0px]'} overflow-hidden duration-500 `}>
      <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
        <ListItemIcon sx={{minWidth: 35}}>
          <LiaHandsHelpingSolid fontSize="23px"/>
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
        <ListItemIcon sx={{minWidth: 35}}>
          <MoveToInboxIcon fontSize="medium"/>
        </ListItemIcon>
        <ListItemText primary="Support Inbox" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
        <ListItemIcon sx={{minWidth: 35}}>
          <NotificationImportantIcon fontSize="medium"/>
        </ListItemIcon>
        <ListItemText primary="Report for problem" />
      </ListItemButton>
      </div>
      
      <hr className={` w-full  ${themeMode ? ' text-black/10 ': ' text-gray-300/20'}`} />

      <MenuItem>
        <ListItemIcon>
          <FcAbout fontSize="25px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>About FriendLoop</ListItemText>}
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <IoIosLogOut fontSize="25px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Log out</ListItemText>}
      </MenuItem>
    </Paper>
  );
}
