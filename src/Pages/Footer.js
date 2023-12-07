import React from 'react'
import Logo from '../Tools/images/logo.jpg'


function Footer() {
    return (
        <div className='zonePublicite'>
            <figure className="Publicite">
                <marquee direction="left">
                    <div>
                        <span>
                            <img src={Logo} alt="logo" style={{width : "3em", height: 'auto', borderRadius : '50%', outline : "1px solid #fff"}} className='mt-1'/>
                        </span>
                        <span>
                        <p className='mt-3'>&nbsp;COSEF - FERNAND Eddie Serge " MANAMPY, MIARO ARY MANASOA NY VAHOAKAN' I ANTALAHA "</p>
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
                        <p>A propos de nous</p>
                        <p>Nos coordonnees</p>
                        <p>centre d'aide</p>
                    </section>
                    <section>
                        <p>Contenu</p>
                        <p>Web TV</p>
                        <p>Mot du questeur</p>
                        <p>Mini-Biographie</p>
                    </section>
                    <section>
                        <p>Archive</p>
                        <p>Recherche</p>
                        <p></p>
                        <p></p>
                    </section>
                    <section>
                        <p>Suivez-nous</p>
                        <article>
                           <i className="bi-facebook"></i>
                           <i className="bi-linkedin"></i>
                           <i className="bi-whatsapp"></i>
                           <i className="bi-google"></i>
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