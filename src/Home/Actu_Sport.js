
import React from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import barea from '../Tools/images/Barea.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom';


function Actu_Sport() {
    const articles = [
        {
            type: "Politique",
            title: "FIFIDIANANA FILOHAM-PIRENENA 2023",
            imageUrl: Image,
            description: `
            Lany ho Filohan’ny Repoblika tamin’ny fihodinana voalohany i Andry Rajoelina ( 58,96%) ka mandray ny toerany avy hatrany aorian’ ny fihanany hoy ny Filohan’ny HCC Florent Rakotoarisoa.`,
            publishDate: "19 - 02- 15",
        },
        {
            type: "Sport",
            title: "Barea vs Thad",
            imageUrl: barea,
            description: `* MISAOTRA AN'ANDRIAMANITRA LEHIBE ISIKA FA NAHARESY 3 - 0  NY EKIPANTSIKA BAREA OMALY ALINA.
                  * MANKASITRAKA BAREA.
                  * MANKASITRAKA NY EKIPA REHETRA.
                    * MANKASITRAKA IHANY KOA NY EKIPA TEKNIKA REHETRA.
                   ALEFA BAREA....`,
            publishDate: "21 Novembre",
        },
    ];
        // CLICK ARTICLE
        const navigate = useNavigate();

        const redirectToArticle = (article) => {
            const url = `/article?type=${article.type}&imageUrl=${encodeURIComponent(
                article.imageUrl
            )}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(
                article.description
            )}&publishDate=${article.publishDate}`;
    
            navigate(url);
        };
    
  return (
    <div>
          {/* contenue article SECTION */}
                {/* section-photo */}
                <div className='ArticlePhoto'>
                <NavLink to="/sport" style={{textDecoration : "none"}}><p className='text-uppercase fw-semibold fs-4'><span style={{ fontWeight : "800"}}>Sport</span></p></NavLink>
                <div className='d-flex flex-row gap-4 flex-wrap w-100 pe-4'>
                    {articles.map((article, index) => (
                        // <Link to={`/article`} key={index}>
                        <section
                            key={index} className={article.type.toLowerCase()}
                            onClick={() => redirectToArticle(article)} style={{width: "36em"}}>
                            <article>
                                <picture>
                                    <img src={article.imageUrl} alt="Antalaha" style={{width: "10vw"}}/>
                                </picture>
                            </article>
                            <article className="voir-plus"
                                data-type={article.type}
                                data-imageurl={article.imageUrl}
                                data-title={article.title}
                                data-description={article.description}
                                data-publishdate={article.publishDate}>
                                <span id='type'>{article.type}</span>
                                <span>{article.title}</span>
                                <span>{article.description}</span>
                                <span>
                                    <i className='bi-dot'></i>
                                    <i className='bi-dot'></i>
                                    <i className='bi-dot'></i>
                                </span>
                                <span style={{marginLeft: "0.2em"}}>Publier le {article.publishDate}</span>
                            </article>
                        </section>
                        // </Link>
                    ))}
                    </div>
                </div>
    </div>
  )
}

export default Actu_Sport