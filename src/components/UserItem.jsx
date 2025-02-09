import { Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { otherUser } from '../redux-store/features/otherUser/OtherUserSlice'
import { alluser } from '../redux-store/features/alluser/alluserSlice'
import { getDatabase, ref, set , push , remove } from "firebase/database";



const UserItem = ({image , name , mutual , id , add , request , sent , addedby , calcelID}) => {

    // variables
    const db = getDatabase();
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let gotToprofile = (id)=>{
        navigate('/profile')
        dispatch(otherUser(id.uid))
        localStorage.setItem('profileID' , id.uid)
    }

    // handleadd function
    const handleadd =(id , addedby)=>{
      set(push(ref(db, 'requests/')), {
        sender: {...addedby},
        receiver: {...id}
      }).then(()=>{
        dispatch(alluser())
      })
    }

    // handlecancel function
    const handlecancel = (calcelID)=>{
        remove(ref(db, 'requests/' + calcelID))
    }


  return (
    <div className='flex p-2 rounded-xl gap-4 bg-black/5 '>
        <img src={image} alt="image" className=' w-[80px] h-[90px] object-cover rounded-2xl cursor-pointer 'onClick={()=>gotToprofile(id)}/>
        <div className="w-fit ">
            <h4 className=' font-semibold text-xl whitespace-nowrap cursor-pointer ' onClick={()=>gotToprofile(id)} >{name}</h4>
            <p className='opacity-[.5]'>{mutual && `mutual ${mutual}`}</p>
            {add && 
            <Box sx={{display:'flex', gap:2}} >
              <Button variant='contained' size='small' onClick={()=>handleadd(id , addedby)}>add</Button>
              <Button variant='outlined' size='small'>delete</Button>
            </Box>
            }

            {sent && <Button variant='contained' size='small' onClick={()=> handlecancel(calcelID)}>calcel</Button>}
            {request && 
            <Box sx={{display:'flex', gap:2}} >
              <Button variant='contained' size='small' onClick={()=>handleconfirm(id , addedby)}>confirm</Button>
              <Button variant='outlined' size='small'>cancel</Button>
            </Box>
            }
        </div>
        <Box sx={{width:'100%'}} onClick={()=>gotToprofile(id )}>
            
        </Box>
    </div>
  )
}

export default UserItem