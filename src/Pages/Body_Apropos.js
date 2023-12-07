import React from 'react'
import AproposImg from '../Tools/images/vaovao1.jpg';

function Body_Apropos() {
    return (
        <>
        <div className='Apropos'>
            <div>
                <header>
                    <picture>
                        <img src={AproposImg} alt="apropos" />
                        <article className='mt-3'>
                            <p>Qui nous sommes</p>
                            <p>Cosef Press est une plateforme dynamique dédiée à fournir des informations pertinentes et fiables sur des sujets variés. Explorez nos pages pour découvrir des contenus riches et captivants.</p>
                            {/* <button>En savoir plus</button> */}
                        </article>
                    </picture>
                </header>
                <main>
                    <section>
                        <p className='fs-2 fw-bold'>Nos Objectif</p>
                        <p>Notre mission à Cosef Press est de créer un espace où l'information rencontre l'innovation. Nous nous efforçons de présenter des contenus de qualité qui éduquent, inspirent et divertissent nos lecteurs.</p>
                    </section>
                    <section>

                        <p className='fs-2 fw-bold'>Actualisation constante</p>

                        <p> Chez Cosef Press, nous sommes engagés à maintenir nos publications à jour. Chaque jour, nous vous apportons des articles pertinents et informatifs pour vous tenir au courant des dernières nouvelles, tendances et développements.</p>
                    </section>
                    <section>
                        <p className='fs-2 fw-bold'>Diversité des sujets</p>

                        <p> Nous couvrons une vaste gamme de sujets, de la technologie à la culture, en passant par les sciences et bien plus encore. Chez Cosef Press, il y en a pour tous les goûts.</p>
                    </section>
                    <section>
                        <p className='fs-2 fw-bold'>Réflexion sur l'avenir</p>

                        <p> En tant que source d'information évolutive, Cosef Press s'efforce d'être à la pointe de l'actualité. Explorez notre site pour découvrir des analyses approfondies et des visions futures sur les sujets qui façonnent notre monde.</p>
                    </section>
                </main>
            </div>
        </div>
        </>
    )
}

export default Body_Apropos
