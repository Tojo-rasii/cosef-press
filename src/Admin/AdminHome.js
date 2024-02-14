import React, { useState } from 'react';
import Aside_Admin from '../AdminPage/Aside_Admin'
import Body_Admin from '../AdminPage/Body_Admin'
import Live_Admin from '../AdminPage/Live_Admin'
import AddArticle from '../AdminPage/AddArticle'

function AdminHome() {

  return (
    <div>
      <div className='d-flex flex-row gap-3 m-3'>
        <Aside_Admin />
        <div style={{marginLeft:"13em"}} className='d-flex flex-column gap-2'>
          <Body_Admin />
          <AddArticle/>
        </div>

      </div>
    </div>
  )
}

export default AdminHome