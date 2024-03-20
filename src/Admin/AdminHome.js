import React, { useState } from 'react';
import Aside_Admin from '../AdminPage/Aside_Admin'
import Body_Admin from '../AdminPage/Body_Admin'
import Live_Admin from '../AdminPage/Live_Admin'
import AddArticle from '../AdminPage/AddArticle'
import AddVideo from '../AdminPage/AddVideo';
import CounterData from '../AdminPage/CounterData';
import NavList from '../AdminPage/NavList';

function AdminHome() {

  return (
    <div>
      <div className='d-flex flex-row gap-3 m-3'>
        <Aside_Admin />
        <div style={{marginLeft:"13em"}} className='d-flex flex-column align-items-center'>
        <div  className='d-flex flex-column gap-2'>
          <Body_Admin />
          <NavList />
          <AddArticle/>
          <AddVideo />
        </div>
        <div>
          {/* <CounterData /> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome