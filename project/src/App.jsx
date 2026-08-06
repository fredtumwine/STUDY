import React, { useEffect, useState } from 'react'
import im1 from './assets/im1.jpg';
import im2 from './assets/im2.jpg';
import im3 from './assets/im3.jpg';
import im4 from './assets/im4.jpg';

function App() {

const container  = [

  {
    image:im1
  },
  {
    image:im2
  },
  {
    image:im3
  },
  {
    image:im4
  }
];

const slide = [
  container.slice(0,3),
  container.slice(1,4)
];
const [page,setPage] = useState(0);

const [one,setOne] = useState(0);

const prevSlide = ()=>{

  setOne ((prev=>(prev -1 + container.length)%container.length)
)}

const nextSlide = ()=>{
 setOne((prev=>(prev +1) %container.length));

}
useEffect(()=>{
  const HandleC = (e)=>{
    if(e.key == 'ArrowRight')nextSlide();
    if(e.key == 'ArrowLeft')prevSlide();

  };

  window.addEventListener('keydown',HandleC)
  return ()=> window.addEventListener('keydown',HandleC)

},[]);
useEffect(()=>{
  const timer = setInterval(() => {
    nextSlide();
  }, 5000);
  return()=>clearInterval(timer);
})
  return (


    <div>



       <div className='bg-cover bg-center w-full min-h-screen bg-no-repeat' style={{backgroundImage:`url(${container[one].image})`}}>


       <button onClick={(nextSlide)} className='text-white border'>rigth</button>  
       <button onClick={(prevSlide)}  className='text-white border'>left</button> 
       <div className="flex justify-center gap-3 mt-5">

{
  container.map((_,index)=>(

    <button
      key={index}
      onClick={()=>setOne(index)}
      className={`
        w-3 h-3 rounded-full
        ${
          one === index
          ? "bg-green-600"
          : "bg-gray-300"
        }
      `}
    ></button>

  ))
}

</div> 

    </div>


     <div className='overflow-hidden'>
      <div className='flex min-w-full ' style={{transform:`translateX(-${page * 100}%)`}}>
        {
          slide.map((photo,index)=>(

            <div key={index} className='grid grid-cols-3 min-w-full gap-4'>
              {
                photo.map((item,index)=>(
                  <div key={index}>
                    <img src={item.image} alt="" />
                  </div>
                ))
              }

            </div>
          ))
        }
      </div>
     </div>
     <div>
      {
        slide.map((_,index)=>(
          <button key={index} onClick={()=>setPage(index)} className={`w-4 h-4 rounded-full ${page === index ? "bg-green-400":"bg-gray-300"}`}></button>
        ))
      }
     </div>
    
   
     
    </div>

  )
}

export default App