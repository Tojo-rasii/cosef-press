import React from 'react'
import {NavLink} from "react-router-dom";
import Logo from '../Tools/images/logo.jpg'

function Navbar_Info() {
    const navLinkStyle = {
        textDecoration: "none",
    };
  return (
    <div>
        <header className='Navbar_Info bg-white d-flex flex-row justify-content-between ps-5 pe-5 p-2 position-fixed w-100 z-3 shadow-sm'>
            <div>
                <picture>
                <NavLink to="/"><img src={Logo} alt="logo" style={{width : "4em", height: "auto"}} className='rounded-1'/></NavLink>
                </picture>
            </div>
            <div>
                <nav className='d-flex flex-row gap-5 mt-3 fw-bold'>
                    <NavLink to="/apropos" className={(nav) => (nav.isActive ? "navInfo-active" : "")} style={navLinkStyle}><p>A propos</p></NavLink>
                    <NavLink to="/motDuQuesteur"className={(nav) => (nav.isActive ? "navInfo-active" : "")} style={navLinkStyle}><p>Mot du questeur</p></NavLink>
                    <NavLink to="/miniBiographie"className={(nav) => (nav.isActive ? "navInfo-active" : "")} style={navLinkStyle}><p>Mini biographie</p></NavLink>
                </nav>
            </div>
            <div>
                <article style={{background : "orangered"}} className='ps-3 pe-3 pt-1 pb-1 text-white fw-bold rounded-2'>
                    <p className='mt-3'>Nos coordonnees</p>
                </article>
            </div>
        </header>
    </div>
  )
}

export default Navbar_Info