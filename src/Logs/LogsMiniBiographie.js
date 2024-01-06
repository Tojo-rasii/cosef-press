import React from 'react'
import Navbar from '../Pages/Navbar'
import Body_MiniBiographie from '../Pages/Body_MiniBiographie'
import NavInfo_Logs from '../LogsPages/NavInfo_Logs'
import MiniBiographie_Logs from '../LogsPages/MiniBiographie_Logs'

function LogsMiniBiographie() {
  return (
    <div>
        <NavInfo_Logs />
        <MiniBiographie_Logs />
    </div>
  )
}

export default LogsMiniBiographie