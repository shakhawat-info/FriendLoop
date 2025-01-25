import React from 'react';
import { PiSealWarningThin } from "react-icons/pi";

const Warning = ({er}) => {
  return (
    <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] bg-brand/10  p-5 border-brand/30 border-2 rounded-md w-[40%] ${er ? "scale-100  ":"scale-0"} duration-[.6s]  `}>
        <PiSealWarningThin className='text-5xl absolute top-0 left-[50%] translate-[-50%] text-brand  '/>
        <h2 className='font-Aldrich text-center mt-3 text-lg font-medium  '>Somthing wrong!</h2>
        <p className="font-Ubuntu text-center mt-2  ">{er}</p>
    </div>
  )
}

export default Warning