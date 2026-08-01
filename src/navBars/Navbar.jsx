import React from 'react'
import woman from '../assets/woman.jpg';
import hello from '../assets/hello.jpg';
function Navbar() {
  return (
    <div>
     <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-10 py-4 gap-6">
        <div>
         <h1 className='text font-bold'>OVERPASS</h1>
        </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
       <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
          <a href="" className='text font-semibold'>product</a>
          <a href=""  className='text font-semibold'>solutions</a>
          <a href=""  className='text font-semibold'>company</a>
          <a href=""  className='text font-semibold'>resources</a>
          <div className='relative '>
          <a href=""  className='text font-semibold relative z-1'>pricing</a>

           <div className='w-40 h-40 bg-blue-100 rounded-full absolute top-1 -left-6 overflow-hidden   '>
            <img src={woman} alt="" className='w-full h-full object-cover ' />
          
        </div> 

          </div>
          </div>
          <div className='flex gap-6 pr-20'>
          <a href=""  className='text font-semibold'>find remote work</a>
          <a href=""> <button className='border w-20 rounded-2xl'>login</button></a>
          </div>

        </div>
      </div>
      
      
     <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-20 py-10">
         <div className="w-full lg:w-1/2 p-4 lg:p-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold underline" >Hiring remote doesn't have to suck</h1>
          <h6 className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum amet iure eos eius sequi magni molestias itaque animi nesciunt hic. Expedita ducimus repellendus provident minima, assumenda minus culpa temporibus quisquam.</h6>
          <input type="search" placeholder='enter your email' className='border border-xl pl-5 h-10 mt-4 rounded-xl' />
          <button className='border ml-20 h-10 pl-2 w-30 rounded-2xl bg-blue-400'>START HIRING</button>
        </div>
        <div className='relative'>
        <div className='w-40 h-40 bg-blue-300 absolute -left-30 top-50 rounded-full overflow-hidden  '>
          <img src={hello} alt="" className='w-full h-full' />
          </div>
          <div className='w-40 h-40 bg-blue-300 absolute left-60 top-120 rounded-full overflow-hidden  '>
          <img src={hello} alt="" className='w-full h-full' />
          </div>
          <div className='relative'>
            <div className='w-40 h-40 absolute bg-blue-300 top-120 rounded-full'>

            </div>
             <div className='w-40 h-40 bg-white absolute top-120 left-20'>

             </div>
          </div>

          <div className='realtive'>

            <div className='w-20 h-60 bg-white absolute left-40 -top-9 z-1'>

            </div>
            <div className='w-60 h-60 bg-blue-500 absolute left-40 -top-9 rounded-full'>

            </div>
            
          </div>
          
         <img src={woman} alt="" className='w-150 mt-40 h-100 relative z-1  border border-9' />

        </div>
        </div>
      
      </div>
    
  )
}

export default Navbar