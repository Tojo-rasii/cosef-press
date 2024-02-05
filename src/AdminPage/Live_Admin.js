import React from 'react'

function Live_Admin() {
  return (
    <div>
        <main>
            <section>
               <article>
                <span>
                    <p className='fs-3 fw-bold p-1'>Live radio</p>
                </span>
               </article>
            </section>
            <section className='d-flex flex-row align-items-center gap-5'>
                <article>
                    <span>
                        <p className='p-2 bg-white rounded-2 shadow-sm'><i className="bi-play-circle">&nbsp;</i>marche</p>
                        <p className='p-2 bg-white rounded-2 shadow-sm'><i className="bi-stop-circle">&nbsp;</i>Arret</p>
                        <p className='p-2 bg-white rounded-2 shadow-sm'><i className="bi-download">&nbsp;</i>Enregistrer</p>
                    </span>
                </article>
                <article className='p-2 bg-white rounded-2 shadow-sm'>
                    <span className='d-flex flex-row justify-content-between gap-5'>
                        <i className="bi-circle-fill text-success"></i>
                        <p>Live du jour <em className='fw-semibold'>12 janvier</em></p>
                    </span>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Live_Admin