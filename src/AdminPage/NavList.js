import { React } from 'react'
import { NavLink } from "react-router-dom";


function NavList() {
    const navLinkStyle = {
        textDecoration: "none",
        color: "#000"
    };
    return (
        <div className='NavList'>
            <header>
                <section>
                    <NavLink to="/adminHome" className={(nav) => (nav.isActive ? "navList-active" : "")} style={navLinkStyle}><article>
                        Home
                    </article></NavLink>
                    <NavLink to="/adminHome" className={(nav) => (nav.isActive ? "navList-active" : "")} style={navLinkStyle}><article>
                        Actualite
                    </article></NavLink>
                    <NavLink to="/adminHome" className={(nav) => (nav.isActive ? "navList-active" : "")} style={navLinkStyle}><article>
                        A la une
                    </article></NavLink>
                    <NavLink to="/adminPolitique" className={(nav) => (nav.isActive ? "navList-active" : "")} style={navLinkStyle}><article>
                        Politique
                    </article></NavLink>
                    <NavLink to="/adminSport" className={(nav) => (nav.isActive ? "navList-active" : "")} style={navLinkStyle}> <article>
                        Sport
                    </article></NavLink>

                    <NavLink to="/adminSocial" className={(nav) => (nav.isActive ? "navList-active" : "")} style={navLinkStyle}><article>
                        Social
                    </article></NavLink>

                    <NavLink to="/adminCulturel" className={(nav) => (nav.isActive ? "navList-active" : "")} style={navLinkStyle}> <article>
                        Culturel
                    </article></NavLink>

                </section>
            </header>
        </div>
    )
}

export default NavList