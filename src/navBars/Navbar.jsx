import React from 'react'
import woman from '../assets/woman.jpg';
import message from '../assets/message.jpg';

function Navbar() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(${woman})`}}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* All content must be inside this relative div */}
      <div className="relative z-60">
        <div className='flex  justify-between items-center bg-blue-900'>
          <h1 className='pl-41 text capitalize font-bold text-white'>tier</h1>
          <div className='flex gap-20 p-3 text-white'>
            <a href="">WHAT WE DO</a>
            <a href="">BLOG</a>
            <a href="">PODCAST</a>
            <a href="">CAREERS</a>
            <button className='border rounded-2xl w-40 h-8 bg-red-300'>WORK WITH US</button>
          </div>
        </div>
        
        <div className='flex'>
          <div className='w-[60%] p-40'>
            <h2 className='text text-white capitalize text-5xl'>
              unlock your business potential with facebook & instagram advertising 
            </h2>
            <h6 className='text-white capitalize pt-6'>facebook premier level partner agency</h6>
            <button className='border mt-6 h-10 w-40 rounded-3xl bg-red-200 text-white'>WORK WITH US</button>
          </div>

          <div className='flex justify-center items-center'>
            <div className='relative w-40 h-60 transition-all duration-300 ease-in-out 
              hover:w-60 hover:h-80 hover:z-20 hover:scale-105 hover:-translate-y-5'>
              <img src={woman} alt="" className='w-full h-full object-cover' />  
            </div>
            <div className='relative w-50 h-80 transition-all duration-300 ease-in-out 
              hover:w-60 hover:h-80 hover:z-30 hover:scale-105 hover:-translate-y-5'>
              <img src={woman} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='relative w-40 h-60 transition-all duration-300 ease-in-out 
              hover:w-60 hover:h-80 hover:z-20 hover:scale-105 hover:-translate-y-5'>
              <img src={woman} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>

        <div className='flex py-7 px-36 justify-between text-white'>
          <div className='w-35'>
            <div className='flex gap-3'>
              <img src={message} alt="" />
              <h2>Marketing partner</h2>
            </div>
            <h6 className='text-sm'>facebook premier level agency partner</h6>
          </div>
          <div className='w-35'>
            <div className='flex gap-3'>
              <img src={message} alt="" className='w-11'/>
              <h2>Marketing partner</h2>
            </div>
            <h6 className='text-sm'>facebook premier level agency partner</h6>
          </div>
          <div className='w-35'>
            <div className='flex gap-3'>
              <img src={message} alt="" />
              <h2>Marketing partner</h2>
            </div>
            <h6 className='text-sm'>facebook premier level agency partner</h6>
          </div>
          <div className='w-35'>
            <div className='flex gap-3'>
              <img src={message} alt="" />
              <h2>Marketing partner</h2>
            </div>
            <h6 className='text-sm'>facebook premier level agency partner</h6>
          </div>
          <div className='w-35'>
            <div className='flex gap-3'>
              <img src={message} alt="" />
              <h2>Marketing partner</h2>
            </div>
            <h6 className='text-sm'>facebook premier level agency partner</h6>
          </div>
          <div className='w-35'>
            <div className='flex gap-3'>
              <img src={message} alt="" />
              <h2>Marketing partner</h2>
            </div>
            <h6 className='text-sm'>facebook premier level agency partner</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar