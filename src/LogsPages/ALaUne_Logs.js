import React from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import ALaUne from '../Tools/images/alaune.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom';


function ALaUne_Logs() {
    // A LA UNE
    const aLaUne = [
        {
            imageUrl: Image,
            type : "Politique",
            title: "Fifidianana filoham-pirenena",
            description: "Izay narahinny kandidà Siteny Randrianasoloniaiko taminny isam-bato 14,40%, ary ny kandidà Marc Ravalomanana no fahatelo taminny isam-bato 12,10 raha ny valim-pifidianana vonjimaika navoakanny CENI androany 25 novambra",
            publishDate: "19-02-12"
        },
    ];

    // ARTICLE
    const articles = [
        {
            type: "Politique",
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
            type: "Social",
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
            type: "Politique",
            title: "Title",
            imageUrl: Image,
            description: `Antalaha faha 17 Oktobra 2023
          -----------
 `,
            publishDate: "19 - 02- 15",
            minuterieVideo : "0:00"

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
            minuterieVideo : "0:00"

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
            minuterieVideo : "0:00"

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
            minuterieVideo : "0:00"

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
            minuterieVideo : "0:00"

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
                    {aLaUne.map((article, index) => (
                        <figure id='FigureLaUne' key={index} className={article.type.toLowerCase()}
                        >
                            <picture>
                              <img src={article.imageUrl} alt="alaune" />
                            </picture>
                            <figcaption>
                                <span id='type'>{article.type}</span>
                                <p className='fw-bold fs-2 lh-1 mt-3'>{article.title}</p>
                               <p>{article.description}</p>
                               <p>publier {article.publishDate}</p>
                            </figcaption>
                        </figure>
                    ))}
                    <p className='text-uppercase fw-semibold fs-4 ms-4 titleActu'><span style={{ fontWeight : "800"}}>A la une</span></p>
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
                    <p className='text-uppercase fw-semibold fs-4 titleVideo d-none'>WEB TV</p>
                    {videos.map((article, index) => (

                        <section key={index} className={article.type.toLowerCase()}
                        onClick={() => redirectToVideo(article)}>
                            <article>
                                <picture>
                                    <video poster={article.imageUrl}></video>
                                    <span className='position-absolute iconPlay'>
                                        <i className='bi-play-circle-fill'><span>&nbsp;{article.minuterieVideo}</span></i>
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

export default ALaUne_Logs
