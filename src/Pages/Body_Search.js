import React, { useState, useEffect } from 'react';
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom';



function Body_Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  const newsData = [
    {
      type: "Politique",
      title: "title",
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
      title: "title",
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
    {
      type: "culturel",
      title: "title",
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
    {
      type: "politique",
      title: "title",
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
    {
      type: "sport",
      title: "title",
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
    // Ajoutez d'autres articles au besoin
  ];

  useEffect(() => {
    filterArticles();
  }, [searchTerm]);

  const filterArticles = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredArticles = newsData.filter(article =>
      article.type.toLowerCase().includes(lowerCaseSearchTerm)
    );

    setFilteredArticles(filteredArticles);
  };
  const navigate = useNavigate();

  const redirectToArticle = (article) => {
    const url = `/article?type=${article.type}&imageUrl=${encodeURIComponent(
        article.imageUrl
    )}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(
        article.description
    )}&publishDate=${article.publishDate}`;

        // Redirigez vers la nouvelle page
        navigate(url);
  };

  return (
    <div>
      <main className='Search'>
        <header>
          <p className='ms-2'>Rechercher sur le site</p>
          <article>
            <span>
              <input type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Recherche un article..' />
            </span>
            <span className='mt-2'>
              <i className="bi-search"></i>
            </span>
          </article>
        </header>
          {/* POLITIQUE */}
            {filteredArticles.map(article => (
              <section
              key={article.type} className={article.type.toLowerCase()}
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
            ))}
          {/* SOCIAL */}
      </main>
    </div>
  )
}

export default Body_Search
