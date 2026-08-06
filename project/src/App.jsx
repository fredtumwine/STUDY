import React, { useEffect, useState } from 'react'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im3 from './assets/im3.jpg'
import im4 from './assets/im4.jpg'

function App() {

  const holder = [
    {
      image:im1,
      title:"gutera inkunga"
    },
    {
      image:im2,
      title:"gufasha abatishoboye"
    },
    {
      image:im3,
      title:"guhemba abakozi"
    },
    {
      image:im4,
      title:"gubitsa amafaranga"
    }
  ];


  const [current,setCurrent] = useState(0);

  const prevSlide = ()=>{
    setCurrent((prev)=>(prev -1 + holder.length)%holder.length);
  }

  const nextSlide = ()=>{
    setCurrent((prev)=>(prev +1) %holder.length);
  }

 useEffect(()=>{
  const timer = setInterval(()=>{
    nextSlide();
  },5000)

  return ()=>clearInterval(timer)
 },[]);

 useEffect(()=>{
  const handleC = (e)=>{
    if(e.key == 'ArrowRight')nextSlide()
      if(e.key == 'ArrowLeft')prevSlide()
  }

  window.addEventListener('keydown',handleC)
  return ()=>window.removeEventListener('keydown',handleC);
 },[]);


 const group = [
  holder.slice(0,3),
  holder.slice(1,4)
 ];

 const [page,setPage] = useState(0);

useEffect(()=>{
  const tell = setInterval(()=>{
     setPage((prev) => (prev + 1) % group.length);
  },5000);

  return ()=> clearInterval(tell)
},[])


  return (
    <div>
      
      <div className=' bg-cover bg-no-repeat bg-center min-h-screen' style={{backgroundImage:`url(${holder[current].image})`}}>

        <button onClick={()=>nextSlide()} className='border text-white'>RIGHT</button>
        <button onClick={()=>prevSlide()} className='border text-white'>left</button>
         {
          holder.map((_,index)=>(
            <button onClick={()=>setCurrent(index)} className={`w-4 h-4 rounded-full ${current === index ? "bg-green-400":"bg-gray-300"}`}></button>
          ))
         }
      </div>


     <div className='overflow-hidden'>
      <div className='flex transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${ page * 100}%)`}}>
        {
          group.map((each,index)=>(
            <div key={index} className='min-w-full flex  gap-5'>
              {
                each.map((one,index)=>(
                  <div key={index} className='flex-1 flex flex-col gap-2' >
                    <img src={one.image} alt="" />
                    <h1>{one.title}</h1>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
        
        <div>
      {
        group.map((_,index)=>(
          <button onClick={()=>setPage(index)} className={`w-4 h-4 rounded-full ${page === index ? "bg-green-400":"bg-gray-400"}`}></button>
        ))
      }
     </div>
</div>
      
    </div>
    
  )
}

export default App