import React from 'react'

function Who() {
  return (
    <div>
         <section id='who' className='pt-17'>


          <div className='flex justify-between' >
            <div className='p-10 flex flex-col gap-4'>
                <h1 className='text-black  uppercase text-3xl'>who we are </h1>
                <div className='w-30 h-2 bg-green-500 rounded-3xl'></div>
            </div>
            <div className='pr-120 pt-5 capitalize text-3xl'>
               <h1>vision & mission</h1>
               <h1>core values</h1>
               <h1>strategic pillars</h1>  
            </div>
          </div>
         </section>
        
         </div>
  )
}

export default Who