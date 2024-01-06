import React from 'react'
import Navbar_Logs from '../LogsPages/Navbar_Logs'
import Home_Logs from '../LogsPages/Home_Logs'
import ActuCulturel_Logs from '../LogsHome/ActuCulturel_Logs'
import ActuPolitique_Logs from '../LogsHome/ActuPolitique_Logs'
import ActuSocial_Logs from '../LogsHome/ActuSocial_Logs'
import ActuSport_Logs from '../LogsHome/ActuSport_Logs'
import ActuVideo_Logs from '../LogsHome/ActuVideo_Logs'
import Footer_Logs from '../LogsPages/Footer_Logs'

function LogsHome() {
  return (
    <div>
        <Navbar_Logs />
        <Home_Logs />
        <ActuCulturel_Logs />
        <ActuSocial_Logs />
        <ActuPolitique_Logs />
        <ActuSport_Logs />
        <ActuVideo_Logs />
        <Footer_Logs />
    </div>
  )
}

export default LogsHome