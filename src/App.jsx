import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'


const App = () => {

  const [sidebar,setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
  <Route path="/home" element={<Home sidebar={sidebar} />} />
  <Route path="/home/Video/:categoryId/:videoId" element={<Video />} />
</Routes>
    </div>
  )
}

export default App