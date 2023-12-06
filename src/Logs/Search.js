import React from 'react'
import Navbar from '../Pages/Navbar'
import Body_Search from '../Pages/Body_Search'
import CodeSearch from '../Draft/CodeSearch'

function Search() {
    // const data = [
    //     { id: 1, name: 'Apple' },
    //     { id: 2, name: 'Banana' },
    //     { id: 3, name: 'Cherry' },
    //     { id: 4, name: 'Date' },
    //     { id: 5, name: 'Grape' },
    //     { id: 6, name: 'Lemon' },
    //   ];
  return (
    <div>
      <Navbar />
      <Body_Search />
      {/* <CodeSearch data={data} /> */}
    </div>
  )
}

export default Search
