import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, TextField } from '@mui/material';
import { getDatabase, ref, onValue , push } from "firebase/database";



// icons
import { GiArchiveResearch } from "react-icons/gi";


const EiditModal = ({editname}) => {

    // states
    const db = getDatabase();
    const userRef = ref(db, 'users/');
    const [alUser , setAlUser] = useState([]);
    const [choosedusername , setChoosedusername] = useState('');
    const [userNameErr , setUserNameErr] = useState('');
    const [isUsername , setIsUsername] = useState(true);


    useEffect(()=>{
    onValue(userRef, (snapshot) => {
        const userList = []
      snapshot.forEach((user)=>{
        userList.push(user.val());
      })
      setAlUser(userList)
    });

    },[])



    // type user name
    const chooseUname = (e)=>{
        setChoosedusername(e.target.value);
        setUserNameErr('');
    }




// check userName
const handlecheck = ()=>{

    if(!choosedusername){
        setUserNameErr('Choose a user name , Please')
    }
    if(choosedusername.length < 4 ){
        setUserNameErr('User name must be at least 4 carecter.')
    }
    if(/^(?!.*\.\.)(?!^\.)[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/.test(choosedusername) && choosedusername.length >= 4){
        alUser.map((user)=>{
            if(user.userName){
                if(choosedusername == user.userName || choosedusername == user.metadata.createdAt){
                    setIsUsername(false);
                }
            }
            else{
                if(choosedusername == user.metadata.createdAt){
                    setIsUsername(false);
                    // console.log(choosedusername);
                    // console.log(user.metadata.createdAt);
                }
            }
            
        })
        
    }
    else{
        setUserNameErr('Invalid user name.')
    }
    
    }
    

  return (
    <div className='w-full h-screen bg-black/70 fixed top-0 left-0 z-[1] grid place-items-center  '>
        <div className="w-1/2 bg-white/70 rounded-lg px-[70px] ">
            <h2 className=' font-Aldrich font-medium text-center py-2  '>{'editname'}</h2>
            <Divider/>
            <Box sx={{display: 'flex' , justifyContent: 'space-between' , margin: '20px 0 5px'  }}>
              <TextField id="outlined-basic" label="UserName" variant="standard" sx={{width: '80%'  }} onChange={chooseUname} />
              <Button variant="contained" endIcon={<GiArchiveResearch />} onClick={handlecheck}>Availability Check</Button>
            </Box>
            <Box >
              {userNameErr && <p className='font-Ubuntu text-red-500/50    '>{userNameErr}</p>}
            </Box>
            <Box sx={{padding: '30px 0 20px' , display: 'flex' , justifyContent: 'end' , gap:5}} >
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained">Save</Button>
            </Box>

        </div>
    </div>
  )
}

export default EiditModal