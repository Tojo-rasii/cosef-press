
import React from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom';


function Actu_Social() {
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
                <NavLink to="/sport" style={{textDecoration : "none"}}><p className='text-uppercase fw-semibold fs-4'><span style={{ fontWeight : "800"}}>Social</span></p></NavLink>
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

export default Actu_Social