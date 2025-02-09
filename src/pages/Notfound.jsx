import React from 'react'

const Notfound = ({msg}) => {
  return (
<div className=" ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-2xl tracking-tight font-extrabold lg:text-4xl text-primary-600 ">{msg}</h1>
            <p className="mb-4 text-xl tracking-tight font-bold  md:text-2xl ">Something's missing.</p>
            <p className="mb-4 text-lg font-light  ">Sorry, we can't find any data. You'll find lots to explore on the home page. </p>
            <a href="#" className="inline-flex  bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
        </div>   
    </div>
</div>
  )
}

export default Notfound