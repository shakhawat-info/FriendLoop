import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {darktheme} from '../redux-store/features/dark-light theme/themeSlice';
import { menushort } from '../redux-store/features/menuShort/menushortSlice';

// components
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

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



export default function MenuSide() {
  // current user data
  const data = useSelector((state)=>state.user.value);
  const themeMode = useSelector((state)=>state.theme.value);
  const menuExtend = useSelector((state)=>state.menushort.value);
  const [menuWidth , setMenuWidth] = React.useState(370)
  const dispatch = useDispatch();
  const [issetting , setIsetting] = React.useState(false)
  
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


// 
console.log(issetting);


  return (
    <Paper sx={{  width: menuWidth, maxWidth: '100%' , height: '100vh', transition: '.8s'  }}>
      <div className={`flex pl-3 pt-3 gap-3 relative `}>
        {menuExtend && <img src={data.photoURL} alt="profile" className='w-[100px] h-[100px] rounded-[20px]    '/>}

        {/* menu view option */}
        <button onClick={menuView} type="button" className={`cursor-pointer bg-[#52565e] absolute duration-[.8s] top-[10px] ${menuExtend ? 'right-[-20px]': 'right-[-10px]'}  w-[40px] h-[40px] rounded-full border-2 border-white    `}>
          {menuExtend ? <KeyboardArrowLeftIcon className={`${themeMode && 'text-white'}`}/> : <KeyboardArrowRightIcon className={`${themeMode && 'text-white'}`}/>}
        </button>
        
        <div className={` w-full  ${menuExtend ? ' pr-5':'mt-10'} duration-[.8s]`}>
          {menuExtend && <h2 className={`font-Aldrich ${menuExtend ? 'whitespace-wrap':'whitespace-nowrap'}`}>{data.displayName}</h2>}
          {menuExtend && <p className='font-Aldrich text-[13px]   '>user name</p>}
          <Divider sx={{marginTop: 1}}/>
          <div className="flex justify-around  mt-3">

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
        <MenuItem>
          <ListItemIcon>
            <AppsIcon fontSize="medium" />
          </ListItemIcon>
          {menuExtend && <ListItemText>Home</ListItemText>}
        </MenuItem>
        <MenuItem>
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
            <ListItemText primary="Setting" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 5 , minWidth: 10}}>
            <ListItemIcon sx={{minWidth: 35}}>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Order & Payments" />
          </ListItemButton>
      </div>

      <hr className='text-gray-300'/>

      <MenuItem>
        <ListItemIcon>
          <MdContactSupport fontSize="25px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Help & Support</ListItemText>}
        {menuExtend && <Button><KeyboardArrowDownIcon/></Button>}
      </MenuItem>
      
      <hr className='text-gray-300'/>

      <MenuItem>
        <ListItemIcon>
          <IoIosLogOut fontSize="25px" />
        </ListItemIcon>
        {menuExtend && <ListItemText>Log out</ListItemText>}
      </MenuItem>
    </Paper>
  );
}
