import React from 'react';
import { BsPatchCheck } from "react-icons/bs";

const Success = ({succ}) => {
  return (
    <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] bg-green-500/10  p-5 border-green-500 border-2 rounded-md w-[40%] ${succ ? "scale-100  ":"scale-0"} duration-[.6s]  `}>
        <BsPatchCheck className='text-5xl absolute top-0 left-[50%] translate-[-50%] text-green-500  '/>
        <h2 className='font-Aldrich text-center mt-3 text-lg font-medium upprecase '>congratulations</h2>
        <p className="font-Ubuntu text-center mt-2  ">{succ}</p>
    </div>
  )
}

export default Success