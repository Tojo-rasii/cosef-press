import React from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom';


function Culturel_Logs() {
    const articles = [
        {
            type: "Culturel",
            title: "Title",
            imageUrl: Image,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
          Aéroport Antsirabato Antalaha
          -----------
          ✅Tonga teny amin'ny #Aéroport Antsirabato Antalaha ny Tale Jeneran'ny ADEMA , Andriamatoa ANDRIANIAINA Jean Germain ny 17 Oktobra 2023 lasa teo nijery  ny fandehanan'ny Asa fanarenana ny tranon-tseranana amin'ity "Aéroport" ity .
          ✅Niatrika izany ireo tompon'andraiki-panjakana vitsivitsy tao Antalaha ka hita tamin'izany ny Lehiben'ny Distrika ,ny PDS ary ireo ekipan'ny COSEF Collaborateurs du Sénateur Eddie FERNAND,izay nisolotena an'Atoa Senatera rahateo.
          ✅Misaotra atsika jiaby niara-nisalahy,hirarintsika ho vita soamantsara ity Aéroport ity mba hiverenan'ny lazany indray.
          Eddie Fernand
          #COSEF
          #AéroportAntsirabato
          #AntalahaTsyMaintsyMandroso`,
            publishDate: "19 - 02- 15",
        },
        {
            type: "Culturel",
            title: "Title",
            imageUrl: Image2,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
          Aéroport Antsirabato Antalaha
          -----------
          ✅Tonga teny amin'ny #Aéroport Antsirabato Antalaha ny Tale Jeneran'ny ADEMA , Andriamatoa ANDRIANIAINA Jean Germain ny 17 Oktobra 2023 lasa teo nijery  ny fandehanan'ny Asa fanarenana ny tranon-tseranana amin'ity "Aéroport" ity .
          ✅Niatrika izany ireo tompon'andraiki-panjakana vitsivitsy tao Antalaha ka hita tamin'izany ny Lehiben'ny Distrika ,ny PDS ary ireo ekipan'ny COSEF Collaborateurs du Sénateur Eddie FERNAND,izay nisolotena an'Atoa Senatera rahateo.
          ✅Misaotra atsika jiaby niara-nisalahy,hirarintsika ho vita soamantsara ity Aéroport ity mba hiverenan'ny lazany indray.
          Eddie Fernand
          #COSEF
          #AéroportAntsirabato
          #AntalahaTsyMaintsyMandroso`,
            publishDate: "19 - 02- 15",
        },
    ];

    // VIDEO
    const videos = [
        {
            type: "Culturel",
            title: "Title",
            imageUrl: Image,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
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

          // CLICK ARTICLE
          const navigate =  useNavigate();

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
                    <p className='text-uppercase fw-semibold fs-4 titleActu'>Actualite&nbsp;<span style={{ fontWeight : "800"}}>Culturel</span></p>
                    {articles.map((article, index) => (
                        <section key={index} className={article.type.toLowerCase()}
                        onClick={() => redirectToArticle(article)}>
                            <article>
                                <picture>
                                    <img src={article.imageUrl} alt="Antalaha" />
                                </picture>
                            </article>
                            <article>
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
                    ))}
                </div>
                {/* contenue article SECTION */}
                {/* section-video */}
                <div className='ArticleVideo'>
                    <p className='text-uppercase fw-semibold fs-4 titleVideo opacity-0'>WEB TV</p>
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

export default Culturel_Logs
