import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);


  return (
    <>
   <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
   <div className={`container ${sidebar?"":'large-container'}`}>
    <Feed category={category}/>
      </div>
      <div>
      {sidebar && <div>Sidebar Content</div>}
      <div>Home Page Content</div>
    </div>
      
    </>
  )
}

export default Home