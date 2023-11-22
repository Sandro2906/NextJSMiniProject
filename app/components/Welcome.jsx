import React from 'react'

const Welcome = () => {
  return (
    <div className='w-full h-auto p-7 bg-purple-400 items-center flex justify-center flex-col'>
        <h1 className='text-6xl font-semibold text-white txtshdw'>WELCOME</h1>

        <div className='w-[700px] h-auto p-3 flex justify-center items-center text-white flex-col text-xl'>
        <h1 className='txtshdw'>I've created a website using Next.js, 
        an API, and JSON. The main purpose of the site is to showcase my skills in that area of programming. 
        I didn't focus much on the design aspect; my goal was to create a functional site. The aesthetics were not my primary concern.</h1>
        <h2 className='txtshdw py-4'> The APIs I used are from the website https://dummyjson.com. </h2>
        <h2 className='txtshdw'>https://dummyjson.com/products</h2>
        <h2 className='txtshdw'>https://dummyjson.com/products/search?q=phone</h2>
        </div>
    </div>
  )
}

export default Welcome