import { Box, Button, Divider, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue , push } from "firebase/database";


// icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GoPersonAdd } from "react-icons/go";
import { RiUserSharedLine } from "react-icons/ri";
import { RiUserReceivedLine } from "react-icons/ri";
import UserItem from '../components/UserItem';


import { useDispatch, useSelector } from 'react-redux';
import Notfound from './Notfound';


const Friends = () => {

  // variables
  const db = getDatabase();
  const userRef = ref(db, 'users/');
  const requestRef = ref(db, 'requests/');
  const [friendchoosetab , setFriendchoosetab ] = useState('request');
  const [allItem , setAllItem] = useState([]);
  const [alluser , setAlluser] = useState([]);
  const [allrequest , setAllrequest] = useState([]);
  const [allsent , setAllsent] = useState([]);
  const currentUser = useSelector((state)=>state.user.value);
  const alusr = useSelector((state)=>state.alluser.value);




  useEffect(()=>{
    // all user fetch
    onValue(userRef, (snapshot) => {
      let allusers = []
      snapshot.forEach((item)=>{
        if(currentUser.uid !== item.key) allusers.push(item)
      })
      setAllItem(allusers)
      
    })
    
    
    // all requests fetch
    onValue(requestRef, (snapshot) => {
      let allrequests = []
      snapshot.forEach((item)=>{
        if(currentUser.uid == item.val().receiver.uid) allrequests.push(item)
      })
      setAllrequest(allrequests)
      
    });


    // all sent fetch
    onValue(requestRef, (snapshot) => {
      let allsents = []
      snapshot.forEach((item)=>{
        if(currentUser.uid == item.val().sender.uid) allsents.push(item)
      })
      setAllsent(allsents)

    });
    
    
    // // remove requests from all item
    const requestRemoved = allItem.filter((alitem)=> !allrequest.some((alrequ)=> alitem.key == alrequ.val().sender.uid))
    
    // remove sent item 
    const sentRm = requestRemoved.filter((requrm)=> !allsent.some((alsnt)=> requrm.key == alsnt.val().receiver.uid ))
          
    setAlluser(sentRm)



  },[currentUser , friendchoosetab , alusr])
  
  
  return (
    <Paper sx={{transition: '.8s' , borderRadius: 0 , padding: '20px 50px'}}>
      <h2 className='font-bold text-3xl  '>Friends</h2>
      <Box sx={{display: 'flex' , justifyContent: 'space-between'}}>
        <Box>
          <p>In FriendLoop, friendship ties,</p>
          <p>Spreading laughter under the skies. </p>
          <p>No matter how far we may roam,  </p>
          <p>In our hearts, we stay at home!</p>
        </Box>
        <Box><Button variant="contained" endIcon={<CloudUploadIcon />}>Upload Contacts </Button></Box>
      </Box>
      
      <Divider sx={{margin: '20px 0'}}/>

      {/* friend choose tab button */}
      <Box sx={{display: 'flex' , gap: '20px'}}>
        <Button variant={friendchoosetab == 'request' ? 'contained' : 'outlined'} startIcon={<RiUserReceivedLine/>} onClick={()=> setFriendchoosetab('request')}>Requests</Button>
        <Button variant={friendchoosetab == 'add' ? 'contained' : 'outlined'} startIcon={<GoPersonAdd/>} onClick={()=>setFriendchoosetab('add')} >Add</Button>
        <Button variant={friendchoosetab == 'sent' ? 'contained' : 'outlined'} startIcon={<RiUserSharedLine/>} onClick={()=>setFriendchoosetab('sent')}>Sent</Button>
      </Box>

      <Divider sx={{margin: '20px 0'}}/>

      {/* friend add tab */}
      {friendchoosetab == 'add' && 
      <Box sx={{display: 'flex' , flexDirection: 'column' , gap: 1}}>
        {alluser.length > 0 &&
        alluser.map((item)=>(
          <UserItem image={item.val().photoURL} name={item.val().displayName} mutual='20' add={true} id={item.val()} addedby={currentUser} />
        ))}
      </Box>
      }


      {/* friend request tab */}
      {friendchoosetab == 'request' && 
        <Box key={2}>
          {allrequest.length == 0 && <Notfound msg="No Request Found" />  }
          {allrequest.length >= 1 &&
          allrequest.map((item)=>(
            <UserItem image={item.val().sender.photoURL}  name={item.val().sender.displayName} mutual='20' request={true} id={item.key}  />
          ))
          }
        </Box>
      }


      {/* friend sent tab */}
      {friendchoosetab == 'sent' && 
        <Box key={3}>
          {allsent.length == 0 && <Notfound msg="No Data Found"/>  }
          {allsent.length >= 1 &&
          allsent.map((item)=>(
            <UserItem image={item.val().receiver.photoURL} id={item.val().receiver}  name={item.val().receiver.displayName} mutual='20' sent={true} calcelID={item.key}  />
          ))
          }
        </Box>
      }

    </Paper>
  )
}

export default Friends