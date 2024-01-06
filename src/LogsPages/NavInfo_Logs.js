import React from 'react'
import {NavLink} from "react-router-dom";
import Logo from '../Tools/images/logo.jpg'

function NavInfo_Logs() {
    const navLinkStyle = {
        textDecoration: "none",
    };
  return (
    <div>
        <header className='Navbar_Info bg-white d-flex flex-row justify-content-between ps-5 pe-5 p-2 position-fixed w-100 z-3 shadow-sm'>
            <div>
                <picture>
                <NavLink to="/logsHome"><img src={Logo} alt="logo" style={{width : "4em", height: "auto", outline: "2px solid silver"}} className='rounded-1'/></NavLink>
                </picture>
            </div>
            <div>
                <nav className='d-flex flex-row gap-5 mt-3 fw-semibold text-uppercase'>
                    <NavLink to="/logsApropos" className={(nav) => (nav.isActive ? "navInfo-active" : "")} style={navLinkStyle}><p>A propos</p></NavLink>
                    <NavLink to="/logsMotDuQuesteur"className={(nav) => (nav.isActive ? "navInfo-active" : "")} style={navLinkStyle}><p>Mot du questeur</p></NavLink>
                    <NavLink to="/logsMiniBiographie"className={(nav) => (nav.isActive ? "navInfo-active" : "")} style={navLinkStyle}><p>Mini biographie</p></NavLink>
                </nav>
            </div>
            <div>
                <article className='d-flex flex-column float-right'>
                    <span>
                    <p style={{fontSize:"0.9em", float: "right"}} className='mt-1 fw-semibold'>Suivez-Nous</p>
                    </span>
                    <span style={{marginTop: "-0.7em", color: "rgb(103, 103, 103)"}} className='d-flex flex-row gap-2'>
                        <a href="https://www.facebook.com/profile.php?id=100082365563440" target='_blank'><i className="bi-facebook fs-5"></i></a>
                        <a target='_blank'><i className="bi-whatsapp fs-5 text-primary"></i></a>
                        <a target='_blank'><i className="bi-linkedin fs-5 text-primary"></i></a>
                        <a target='_blank'><i className="bi-google fs-5 text-primary"></i></a>
                    </span>
                </article>
            </div>
        </header>
    </div>
  )
}

export default NavInfo_Logs