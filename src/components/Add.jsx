import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue , push } from "firebase/database";
import UserItem from './UserItem';
import { useSelector } from 'react-redux';

const Add = () => {

//   variables
  const db = getDatabase();
  const userRef = ref(db, 'users/');
  const requestRef = ref(db, 'requests/');
  const [alluser , setAlluser] = useState([]);
  const [allrequest , setAllrequest] = useState([]);
  const [allsent , setAllsent] = useState([]);
  const currentUser = useSelector((state)=>state.user.value);


    
  return (
    <div>

    </div>
  )
}

export default Add