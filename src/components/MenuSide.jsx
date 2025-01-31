import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {darktheme} from '../redux-store/features/dark-light theme/themeSlice';

// components
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';

// icons
import LightModeIcon from '@mui/icons-material/LightMode';
import ListItemIcon from '@mui/material/ListItemIcon';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Cloud from '@mui/icons-material/Cloud';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';


export default function MenuSide() {
  // current user data
  const data = useSelector((state)=>state.user.value);
  const themeMode = useSelector((state)=>state.theme.value);
  const dispatch = useDispatch()
  
  
  // dark-light theme
  const handleTheme = ()=>{
    dispatch(darktheme())
    localStorage.setItem("DarkLightTheme" , themeMode);
  }

  return (
    <Paper sx={{ width: 350, maxWidth: '100%' , height: '100vh', }}>
      <div className='flex pl-3 pt-3 gap-3'>
        <img src={data.photoURL} alt="profile" className='w-[100px] h-[100px] rounded-[20px]    '/>
        <div className="text-center w-full mt-3">
          <h2 className='font-Aldrich  '>{data.displayName}</h2>

          <div className="flex">

          {/* theme options */}
            <button type="button" onClick={handleTheme } className=' cursor-pointer '>
              {themeMode ? <LightModeIcon/> : <NightsStayIcon/>}
            </button>

            {/*  */}
            <button type="button" className='cursor-pointer '>
              <MenuOpenOutlinedIcon/>
            </button>
          </div>
        </div>
      </div>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
