import React from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Image1 from '../Tools/images/alaune.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom';

function Body_Home() {
      // A LA UNE
      const aLaUne = [
        {
            imageUrl: Image1,
            type : "Politique",
            title: "Vokam-pifidianana filoham-pirenena",
            description: "Namoaka ny vali-pifidianana Filoham-pirenena io maraina io ny CENI, lany tamin'ny salan'isa 58,95% ny kandida Laharana fahatelo Andry Rajoelina.",
            publishDate: "le 25 Novembre"
        },
    ];
    // const articles = [
    //     {
    //         type: "Politique",
    //         title: "Iray ihany ny COSEF sy ny STAFF Éric FERNAND.",
    //         imageUrl: Image,
    //         description: `Mr Philbert, nitsidika ny ekipan'ny kabitran'ny Kestiora ny Antenimierandoholona,izay tarihin-dRamatoa  Amalia Bezina  .
    //         Iray ihany ny COSEF sy ny STAFF Éric FERNAND.
    //         COM/COSEF/NOVEMBRE 2023`,
    //         publishDate: "19 - 02- 15",
    //     },
    //     {
    //         type: "Sport",
    //         title: "Barea vs tchad",
    //         imageUrl: Image2,
    //         description: `* MISAOTRA AN'ANDRIAMANITRA LEHIBE ISIKA FA NAHARESY 3 - 0  NY EKIPANTSIKA BAREA OMALY ALINA.
    //         * MANKASITRAKA BAREA.
    //         * MANKASITRAKA NY EKIPA REHETRA.
    //         * MANKASITRAKA IHANY KOA NY EKIPA TEKNIKA REHETRA.
    //         ALEFA BAREA....`,
    //         publishDate: "19 - 02- 15",
    //     },
    // ];

    // VIDEO
    const videos = [
        {
            type: "Politique",
            title: "Title",
            imageUrl: Image,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
 `,
            publishDate: "19 - 02- 15",
        },
        {
            type: "Social",
            title: "Title",
            imageUrl: Image2,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
          Aéroport Antsirabato Antalaha
`,
            publishDate: "19 - 02- 15",
        }
    ];

    // CLICK ARTICLE
    const navigate =  useNavigate();

    const redirectToArticle = (article) => {
        const url = `/article?type=${article.type}&imageUrl=${encodeURIComponent(
          article.imageUrl
        )}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(
          article.description
        )}&publishDate=${article.publishDate}`;
    
        navigate(url);
      };

                   // Créez une URL avec les informations de la vidéo
    const redirectToVideo = (video) => {
        const url = `/video?type=${video.type}&title=${video.title}&description=${encodeURIComponent(video.description)}&publishDate=${video.publishDate}&videoUrl=${video.videoUrl}&imageUrl=${video.imageUrl}`;

        // Redirigez vers la nouvelle page
        navigate(url);
    };
    return (
        <div>
            <main className='ALaUne'>
                {/* contenue article SECTION */}
                {/* section-photo */}
                <div className='ArticlePhoto'>
                {aLaUne.map((article, index) => (
                        <figure id='FigureLaUne' style={{display: 'flex', flexDirection : 'row'}} key={index} className={article.type.toLowerCase()}
                        >
                            <picture>
                              <img src={article.imageUrl} alt="alaune" style={{width: "32vw", height: "auto"}}/>
                            </picture>
                            <figcaption>
                                <span id='type'>{article.type}</span>
                                <p className='fw-bold fs-2 lh-1 mt-3'>{article.title}</p>
                               <p>{article.description}</p>
                               <p>publier {article.publishDate}</p>
                            </figcaption>
                        </figure>
                    ))}
                    {/* <p className='text-uppercase fw-semibold fs-4 titleActu mt-3 mb-5'>Actualite</p>
                    {articles.map((article, index) => ( */}
                        
                        {/* // <Link to={`/article`} key={index}> */}
                        {/* // <section */}
                        {/* // key={index} className={article.type.toLowerCase()} */}
                        {/* // onClick={() => redirectToArticle(article)}> */}
                        {/* //     <article> */}
                        {/* //         <picture> */}
                        {/* //             <img src={article.imageUrl} alt="Antalaha" /> */}
                        {/* //         </picture> */}
                        {/* //     </article> */}
                        {/* //     <article className="voir-plus" */}
                        {/* //     data-type={article.type} */}
                        {/* //     data-imageurl={article.imageUrl} */}
                        {/* //     data-title={article.title} */}
                        {/* //     data-description={article.description} */}
                        {/* //     data-publishdate={article.publishDate}> */}
                        {/* //         <span id='type'>{article.type}</span> */}
                        {/* //         <span>{article.title}</span> */}
                        {/* //         <span>{article.description}</span> */}
                        {/* //         <span> */}
                        {/* //             <i className='bi-dot'></i> */}
                        {/* //             <i className='bi-dot'></i> */}
                        {/* //             <i className='bi-dot'></i> */}
                        {/* //         </span> */}
                        {/* //         <span>Publier le {article.publishDate}</span> */}
                        {/* //     </article> */}
                        {/* // </section> */}
                        {/* // </Link> */}
                    {/* // ))} */}
                </div>
                {/* contenue article SECTION */}
                {/* section-video */}
                <div className='ArticleVideo'>
                    {/* <p className='text-uppercase fw-semibold fs-4 titleVideo'>WEB TV</p> */}
                    {videos.map((article, index) => (

                        <section key={index} className={article.type.toLowerCase()}
                        onClick={() => redirectToVideo(article)}>
                            <article>
                                <picture>
                                    <video poster={article.imageUrl}></video>
                                    <span className='position-absolute iconPlay'>
                                        <i className='bi-play-circle-fill'><span>&nbsp;0:00</span></i>
                                    </span>
                                </picture>
                            </article>
                            <article>
                                <span id='type'>{article.type}</span>
                                <span>{article.title}</span>
                                <span className='d-none'>{article.description}</span>
                                <span>Publier le {article.publishDate}</span>
                            </article>
                        </section>
                    ))}
                </div>
            </main>
        
        </div>
    )
}

export default Body_Home
