import React from 'react'

function Body_Search() {
  return (
    <div>
      <main className='Search'>
        <section>
          <p className='ms-2'>Rechercher sur le site</p>
            <article>
                <span>
                    <input type="search" placeholder='Recherche un article..'/>
                </span>
                <span className='mt-2'>
                    <i className="bi-search"></i>
                </span>
            </article>
        </section>
        <section></section>
      </main>
    </div>
  )
}

export default Body_Search
