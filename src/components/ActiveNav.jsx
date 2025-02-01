import React from 'react'
import { useSelector } from 'react-redux'


const ActiveNav = () => {
    const isTheme = useSelector((state)=>state.theme.value)
  return (
    <div className={`w-[10px] h-[10px] bg-brand  rounded-full absolute top-[40%] right-[2%]  `}></div>
  )
}

export default ActiveNav