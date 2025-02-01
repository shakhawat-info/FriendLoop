import { Box, Divider, Paper, TextField } from '@mui/material'
import React from 'react'
import Logo from '../../public/logo.png'
import { SiGooglecampaignmanager360 } from "react-icons/si";
import ManIcon from '@mui/icons-material/Man';
import { useSelector } from 'react-redux';

const TopSearch = () => {
    const themeMode = useSelector((state)=>state.theme.value);
    return (
    <Paper sx={{ borderRadius: 0,  padding: '5px 50px' , transition: '.8s' , }}  >
        <Box sx={{display: 'flex' , justifyContent: 'space-between' ,alignItems: 'center' ,  paddingBottom: 1}}  >
            <div className="flex items-center gap-3">
              <img src={Logo} alt="logo" className='w-[50px]' />
              <h2 className={`font-Aldrich text-2xl font-bold  flex ${themeMode ? 'text-black/70' : 'text-white/70'}   `}>Fr<ManIcon className='text-brand mx-[-7px] '/>endL<SiGooglecampaignmanager360 className='rotate-[45deg] text-brand'/>p</h2>
            </div>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="outlined"
            sx={{
                width: '30%',
                minHeight: '30px',
                borderRadius: '50px',
                boxSizing: 'border-box',
                '.css-g1crgq-MuiFormLabel-root-MuiInputLabel-root' : {top: '0px'}
            }}
          />

        </Box>
        <Divider />
    </Paper>
  )
}

export default TopSearch