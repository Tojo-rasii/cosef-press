import React from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Images from '../Tools/images/staffCosef.jpg'
import Image2 from '../Tools/images/Fiaonana1.jpg'
// VIDEO
import Video from '../Tools/video/video1.mp4'
import Video2 from '../Tools/video/video2.mp4'
import { NavLink, Link, useNavigate } from 'react-router-dom';


function Actualite_Logs() {
  
    const articles = [
        {
            type: "Politique",
            title: "COSEF sy ny STAFF Éric FERNAND",
            imageUrl: Images,
            description: `Iray ihany ny COSEF sy ny STAFF Éric FERNAND. Mr Philbert, nitsidika ny ekipan'ny kabitran'ny Kestiora ny Antenimierandoholona,izay tarihin-dRamatoa  Amalia Bezina  .
            Iray ihany ny COSEF sy ny STAFF Éric FERNAND.
            COM/COSEF/NOVEMBRE 2023`,
            publishDate: "19 - 02- 15",
        },
        {
            type: "Social",
            title: "Fiaonana teo amin'ny Fikambanana Aeutna Antalaha",
            imageUrl: Image2,
            description: `SÉNATEUR Eddie FERNAND sy ny Fikambanana Aeutna Antalaha Tana
            <br /> Nangataka fihaonana tamin'Andriamatoa Kestiora ny Antenimierandoholona ny Fikambanana mpianatra zanaka Antalaha mandranto fianarana eny amin'ny Oniversiteon'ny Antananarivo(Ankatso).
            Tsy nijijy tambana ny Kestiora,fa nandray izy ireo avy hatrany satria tsy misy hanavahana ny zanaka Antalaha hoy izy.
            Nisy ny tafatafa nifanaovana mikasika ny fampandrosoana ny Fikambanana sy ny tanàna fiaviana (Antalaha).
                     COM/COSEF/NOVEMBRE 2023`,
            publishDate: "19 - 02- 15",
        },
    ];

    // VIDEO
    const videos = [
        {
            type: "Politique",
            title: "Fampielezan-kevitra N:03",
            imageUrl: Image,
            videoUrl: Video,
            description: `Famintinana ny fampielezan-kevitra ny kandida N:3 notanterahin'ny ekipan'ny cosef sy staff Eric FERNAND
 `,
            publishDate: "19 - 02- 15",
            minuterieVideo: "0:00"
        },
        {
            type: "Social",
            title: "Title",
            imageUrl: Image2,
            videoUrl: Video2,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
          Aéroport Antsirabato Antalaha
`,
            publishDate: "19 - 02- 15",
            minuterieVideo: "0:00"

        },
        {
            type: "Culturel",
            title: "Title",
            imageUrl: Image2,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
          Aéroport Antsirabato Antalaha
`,
            publishDate: "19 - 02- 15",
            minuterieVideo: "0:00"

        },
    ];

    // CLICK ARTICLE
    const navigate = useNavigate();

    const redirectToArticle = (article) => {
        const url = `/logsArticle?type=${article.type}&imageUrl=${encodeURIComponent(
            article.imageUrl
        )}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(
            article.description
        )}&publishDate=${article.publishDate}`;

        navigate(url);
    };

    // Créez une URL avec les informations de la vidéo
    const redirectToVideo = (video) => {
        const url = `/logsVideo?type=${video.type}&title=${video.title}&description=${encodeURIComponent(video.description)}&publishDate=${video.publishDate}&videoUrl=${video.videoUrl}&imageUrl=${video.imageUrl}`;

        // Redirigez vers la nouvelle page
        navigate(url);
    };
    return (
        <div>
            <main className='ALaUne'>
                {/* contenue article SECTION */}
                {/* section-photo */}
                <div className='ArticlePhoto'>
                    <p className='text-uppercase fw-semibold fs-4 titleActu'>Actualite</p>
                    {articles.map((article, index) => (
                        // <Link to={`/article`} key={index}>
                        <section
                            key={index} className={article.type.toLowerCase()}
                            onClick={() => redirectToArticle(article)}>
                            <article>
                                <picture>
                                    <img src={article.imageUrl} alt="Antalaha" />
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
                                <span>Publier le {article.publishDate}</span>
                            </article>
                        </section>
                        // </Link>
                    ))}
                </div>
                {/* contenue article SECTION */}
                {/* section-video */}
                <div className='ArticleVideo'>
                    <p className='text-uppercase fw-semibold fs-4 titleVideo'>WEB TV</p>
                    {videos.map((article, index) => (

                        <section key={index} className={article.type.toLowerCase()}
                            onClick={() => redirectToVideo(article)}>
                            <article>
                                <picture>
                                    <video poster={article.imageUrl}>
                                        <source src={article.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </picture>
                                <span className='position-absolute iconPlay'>
                                    <i className='bi-play-circle-fill'><span>&nbsp;{article.minuterieVideo}</span></i>
                                </span>
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

export default Actualite_Logs
