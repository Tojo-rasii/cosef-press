
import React from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
// VIDEO
import Video from '../Tools/video/video1.mp4'
import Video2 from '../Tools/video/video2.mp4'
import { NavLink, Link, useNavigate } from 'react-router-dom';

function ActuVideo_Logs() {
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
        // Créez une URL avec les informations de la vidéo
        const redirectToVideo = (video) => {
            const url = `/logsVideo?type=${video.type}&title=${video.title}&description=${encodeURIComponent(video.description)}&publishDate=${video.publishDate}&videoUrl=${video.videoUrl}&imageUrl=${video.imageUrl}`;
    
            // Redirigez vers la nouvelle page
            navigate(url);
        };
  return (
    <div>
           {/* contenue article SECTION */}
                {/* section-video */}
                <div className='ArticleVideo'>
                <NavLink to="/logsHome" style={{textDecoration : "none"}}><p className='text-uppercase fw-semibold fs-4'><span style={{ fontWeight : "800"}}>WEB TV</span></p></NavLink>
                    <div className='d-flex flex-row flex-wrap justify-content-between'>
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
                </div>
    </div>
  )
}

export default ActuVideo_Logs