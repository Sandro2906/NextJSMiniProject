import React from 'react'
import View from './View'
async function getData(){
    const res = await fetch('https://dummyjson.com/products/search?q=phone')
    const data = await res.json()
    return data.products
  }

const FullView = async () => {
    const data = await getData();
  return (
      <div>
               <div className='bg-purple-400 w-full flex flex-col justify-center items-center'>
    <h1 className='text-5xl text-white txtshdw'>WELCOME</h1>
    <p className='text-xl text-white txtshdw w-[700px] h-auto'>I've created a website using Next.js, an API, and JSON. The main purpose of the site is to showcase my skills in that area of programming. I didn't focus much on the design aspect; my goal was to create a functional site. The aesthetics were not my primary concern.</p>
    </div>
    <div className='grid lg:grid-cols-2 p-4 gap-3 grid-cols-1'>
    {
      data.map(({id,title,price,thumbnail})=>(
        <View key={id} id={id} price={price} title={title} thumbnail={thumbnail} />
      ))
    }
    </div>
          </div>
  )
}

export default FullView
