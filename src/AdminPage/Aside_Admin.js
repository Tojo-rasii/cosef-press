import React from 'react'
import Logo from '../Tools/images/logo.jpg'
import { NavLink, useNavigate } from "react-router-dom";


function Aside_Admin() {
    const navigate = useNavigate();

    const logOut = () =>{
         navigate("/")
    }
  return (
    <div>
        <div>
            <aside className='AsideAdmin bg-white shadow-sm p-3 pe-4 rounded-2 d-flex flex-column gap-3 position-fixed' style={{width: "max-content"}}>
                <section>
                    <article className='d-flex flex-row gap-2 align-items-center rounded-1'>
                        <span>
                            <img src={Logo} alt="logo" style={{width:"2.5em", height:"auto", outline: "2px solid #fff"}} />
                        </span>
                        <span className='fw-bold'>
                            COSEF - ADMIN
                        </span>
                    </article>
                </section>
                <section className='mt-2'>
                    <article>
                        <p className='text-uppercase fw-bold'>general</p>
                    </article>
                    <article className='text-capitalize'>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-house'></i>
                            <p>Home</p>
                        </span>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-bar-chart-line'></i>
                            <p>Data</p>
                        </span>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-people'></i>
                            <p>user connected</p>
                        </span>
                    </article>
                </section>
                <section>
                <article>
                        <p className='text-uppercase fw-bold'>Live on</p>
                    </article>
                    <article className='text-capitalize'>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-plus-square'></i>
                            <p>Add article</p>
                        </span>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-camera-video'></i>
                            <p>Add video</p>
                        </span>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-mic'></i>
                            <p>Live radio</p>
                        </span>
                    </article>
                </section>
                <section>
                    <article>
                    <p className='text-uppercase fw-bold'>Connection</p>
                    </article>
                    <article>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-moon-stars'></i>
                            <p>Darkmode</p>
                        </span>
                    </article>
                    <article>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-gear'></i>
                            <p>Setting</p>
                        </span>
                    </article>
                    <article>
                        <span className='d-flex flex-row gap-2'>
                            <i className='bi-power'></i>
                            <p onClick={logOut}>Logout</p>
                        </span>
                    </article>
                </section>
            </aside>
        </div>
    </div>
  )
}

export default Aside_Admin