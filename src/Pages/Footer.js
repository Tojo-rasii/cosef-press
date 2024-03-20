import React from 'react'
import Logo from '../Tools/images/logo.jpg'
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <div className='zonePublicite'>
            <figure className="Publicite">
                <marquee direction="left">
                    <div>
                        {/* <span>
                            <img src={Logo} alt="logo" style={{width : "3em", height: 'auto', borderRadius : '50%', outline : "1px solid #fff"}} className='mt-1'/>
                        </span> */}
                        <span>
                            <p className='mt-3 fs-5'>&nbsp;FERNAND Eddie Serge <i className='bi-dot'></i> MANAMPY, MIARO ARY MANASOA NY VAHOAKAN' I ANTALAHA <i className='bi-dot'></i></p>
                        </span>
                    </div>
                </marquee>
            </figure>
            <footer>
                <div>
                    <section>
                        <p>COSEF-INFOS</p>
                    </section>
                    <section>
                        <p>contact</p>
                        <NavLink style={{ fontSize: "0.8em", textDecoration: "none", color: "rgb(103, 103, 103)", fontWeight: "light" }} to="/apropos"><p>A propos de nous</p></NavLink>
                        <NavLink style={{ fontSize: "0.8em", textDecoration: "none", color: "rgb(103, 103, 103)", fontWeight: "light" }} ><p>Nos coordonnees</p></NavLink>
                        <NavLink style={{ fontSize: "0.8em", textDecoration: "none", color: "rgb(103, 103, 103)", fontWeight: "light" }}><p>centre d'aide</p></NavLink>
                    </section>
                    <section>
                        <p>Contenu</p>
                        <NavLink style={{ fontSize: "0.8em", textDecoration: "none", color: "rgb(103, 103, 103)", fontWeight: "light" }}><p>Web TV</p></NavLink>
                        <NavLink style={{ fontSize: "0.8em", textDecoration: "none", color: "rgb(103, 103, 103)", fontWeight: "light" }} to="/motDuQuesteur"><p>Mot du questeur</p></NavLink>
                        <NavLink style={{ fontSize: "0.8em", textDecoration: "none", color: "rgb(103, 103, 103)", fontWeight: "light" }} to="/miniBiographie"><p>Mini-Biographie</p></NavLink>
                    </section>
                    <section>
                        <p>Archive</p>
                        <NavLink style={{ fontSize: "0.8em", textDecoration: "none", color: "rgb(103, 103, 103)", fontWeight: "light" }} to="/search"><p>Recherche</p></NavLink>
                        <p></p>
                        <p></p>
                    </section>
                    <section>
                        <p>Suivez-nous</p>
                        <article>
                            <a href="https://www.facebook.com/profile.php?id=100082365563440" target='_blank'><i className="bi-facebook"></i></a>
                            <a target='_blank'><i className="bi-whatsapp"></i></a>
                            <a target='_blank'><i className="bi-linkedin"></i></a>
                            <a target='_blank'><i className="bi-google"></i></a>
                        </article>
                    </section>
                </div>
                <div>
                    <article>
                        <p>&copy;Copyright_2023_COSEF</p>
                    </article>
                    <article>
                        <p>Conditions d'utilisation</p>
                        <p>Politique de confidentialité</p>
                    </article>
                </div>
            </footer>
        </div>
    )
}

export default Footer