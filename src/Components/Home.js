import React from 'react'
import Navbar from '../Pages/Navbar'
import Body_Home from '../Pages/Body_Home'
import Actu_Video from '../Home/Actu_Video'
import Actu_Sport from '../Home/Actu_Sport'
import Actu_Culturel from '../Home/Actu_Culturel'
import Actu_Politique from '../Home/Actu_Politique'
import Actu_Social from '../Home/Actu_Social'

function Home() {
  return (
    <div>
      <Navbar />
      <Body_Home />
      <Actu_Sport />
      <Actu_Culturel />
      <Actu_Politique />
      <Actu_Social />
      <Actu_Video />
    </div>
  )
}

export default Home
