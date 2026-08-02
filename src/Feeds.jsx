import React from 'react'
import brd from './assets/brd.jpg'
import images from './assets/images.png';
import Who from './Who';
import What from './What';

function Feeds() {
  return (
    <div>
        

            <div className='bg-green-400 opacity-90 h-8 text-center  '>
                <h1 className='ml-220 text uppercase text-white text-sm text-center pt-1'>menya byinshi ku ihuzwa rya bdf na brd / more about the intergration of bdf and brd.</h1>
            </div>
            
            
            <div className='flex justify-between h-15 py-5 bg-green-800 opacity-30 sticky  top-0 '>
               
           <img src={images} alt="" className='w-20 h-10 ml-60'/>

           <div className='flex gap-10 px-10 text-white capitalize text-bold '>
            <a href="#">Home</a>
            <a href="#who">who we are</a>
            <a href="#what">what we offer</a>
            <a href="#areas">areas of intervation</a>
            <a href="#special">special projects</a>
            <a href="#impact">our impact</a>
            <a href="#team">our team</a>
            <a href="#public">our publications</a>
            <a href="#media">media</a>

            </div>

        </div>

        <section id='who' className='h-60'>
            <Who/>
        </section>
           
           <section id='what' className='min-h-screen pt-30 '>
              <What/>
              </section>
        </div>
         

    
  )
}

export default Feeds