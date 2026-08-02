import React from 'react'
import Navbar from './navBars/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feeds from './Feeds';



function App() {
  return (
    <BrowserRouter>
    <div>


<Routes>
  <Route path='/' element={<Navbar/>}/>
  <Route path='/product' element={<Feeds/>}/>
</Routes>
     </div>
    </BrowserRouter>
  )
}

export default App