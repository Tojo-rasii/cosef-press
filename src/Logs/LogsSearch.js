import React from 'react'
import Navbar from '../Pages/Navbar'
import Body_Search from '../Pages/Body_Search'
import CodeSearch from '../Draft/CodeSearch'
import Search_Logs from '../LogsPages/Search_Logs'
import Navbar_Logs from '../LogsPages/Navbar_Logs'

function LogsSearch() {
  return (
    <div>
      <Navbar_Logs />
      <Search_Logs />
    </div>
  )
}

export default LogsSearch
