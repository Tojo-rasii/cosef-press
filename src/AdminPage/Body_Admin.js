import React from 'react'

function Body_Admin() {
    return (
        <div>
            <div className='d-flex flex-column gap-2' style={{ width: "80vw" }}>
                <header className='d-flex flex-row justify-content-between align-items-center bg-white rounded-2 p-3 NavAdmin'>
                    <section>
                        <article>
                            <span className="fw-bold text-uppercase bi-plus-square">&nbsp;Add article</span>
                        </article>
                    </section>
                    <section>
                        <article className='bg-light p-1 d-flex flex-row align-items-center gap-2 ps-2 rounded-5 pe-3' style={{ outline: "1px solid silver" }}>
                            <span><i className="bi-search p-1"></i></span>
                            <input type="search" name="" id="" style={{ outline: "none", border: "none", borderLeft: "1px solid silver", background: "none", padding: "0.1em" }} className='ps-1' />
                        </article>
                    </section>
                    <section className="d-flex flex-row align-items-center gap-3">
                        <article>
                            <span><i className="bi-moon-fill bg-light p-1 ps-2 pe-2 rounded-circle fs-5" style={{ outline: "1px solid silver" }}></i></span>
                        </article>
                        <article>
                            <span><i className="bi-envelope-fill bg-light p-1 ps-2 pe-2 rounded-circle fs-5" style={{ outline: "1px solid silver" }}></i></span>
                        </article>
                        <article>
                            <span><i className="bi-person-circle bg-light p-1 ps-2 pe-2 rounded-circle fs-5" style={{ outline: "1px solid silver" }}></i></span>
                        </article>
                    </section>
                </header>
            </div>
        </div>
    )
}
export default Body_Admin;