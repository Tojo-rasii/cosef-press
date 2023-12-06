import React from 'react'
import { useLocation } from 'react-router-dom';
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import Video from '../Tools/video/video1.mp4'
import { NavLink, Link, useNavigate } from 'react-router-dom';



function Body_ClickVideo() {
    // Récupérez l'objet location qui contient les paramètres d'URL
    const location = useLocation();

    // Obtenez les paramètres d'URL à partir de location.search
    const searchParams = new URLSearchParams(location.search);

    // Utilisez les paramètres d'URL comme vous en avez besoin
    const articleType = searchParams.get('type');
    const imageUrl = decodeURIComponent(searchParams.get('imageUrl'));
    const videoUrl = decodeURIComponent(searchParams.get('videoUrl'));
    const title = decodeURIComponent(searchParams.get('title'));
    const description = decodeURIComponent(searchParams.get('description'));
    const publishDate = searchParams.get('publishDate');


    // Ajoutez une classe CSS basée sur le type d'article
const articleClass = articleType ? articleType.toLowerCase() : '';

    // Votre logique pour afficher les données

    // VIDEO
    const videos = [
        {
            type: "Politique",
            title: "Title",
            imageUrl: Image,
            videoUrl: Video,
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
        },
    ];

    const navigate = useNavigate();

    // Créez une URL avec les informations de la vidéo
    const redirectToVideo = (video) => {
        const url = `/video?type=${video.type}&title=${video.title}&description=${encodeURIComponent(video.description)}&publishDate=${video.publishDate}&videoUrl=${video.videoUrl}&imageUrl=${video.imageUrl}`;

        // Redirigez vers la nouvelle page
        navigate(url);
    };
    return (
        <div>
            <main className='ClickArticle'>
                {/* CLICK ARTICLE PHOTO */}
                <div>
                    <section className={articleClass}>
                        <article>
                            <span id='type'>{articleType}</span>
                            <h1 id='titleStyle'>{title}</h1>
                        </article>
                        <article>
                            <picture>
                                <video poster={imageUrl} controls style={{ width: "30em", height: "auto" }} >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p id='publishDate'>Publié le {publishDate}</p>
                            </picture>
                        </article>
                    </section>
                    {/* DESC */}
                    <section>
                        <article>
                            <p>{description}</p>
                        </article>
                    </section>
                </div>
                {/* CLICK ARTICLE VIDEO */}
                <div className='ArticleVideo'>
                    <p className='text-uppercase fw-semibold fs-4 titleVideo'>WEB TV</p>
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

export default Body_ClickVideo