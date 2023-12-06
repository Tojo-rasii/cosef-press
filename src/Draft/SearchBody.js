import React, { useState, useEffect } from 'react';


function Body_Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  const newsData = [
    {
      type: "Politique",
      imageUrl: "../Site-PressNews/tools/images/cosef.jpg",
      title: "Title news 1",
      description: "Description for news 1...",
      publishDate: "01/01/2023",
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

  const redirectToArticle = (article) => {
    const url = `/article?type=${article.type}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(article.description)}&publishDate=${article.publishDate}`;
    window.location.href = url;
  };

  return (
    <div>
      <main className='Search'>
        <section>
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
        </section>
        <main className="Main-body">
        <section className="Article-Photo">
          {/* POLITIQUE */}
          <div id="newsContainer">
            {filteredArticles.map(article => (
              <div key={article.title} className={`article ${article.type.toLowerCase()}`}>
                <article>
                  <picture>
                    <img src={article.imageUrl} alt="imager" />
                  </picture>
                </article>
                <article>
                  <span>{article.type}</span>
                  <span>{article.title}</span>
                  <span>{article.description}</span>
                  <p
                    className="voir-plus"
                    data-type={article.type}
                    data-title={article.title}
                    data-description={article.description}
                    data-publishDate={article.publishDate}
                    onClick={() => redirectToArticle(article)}
                  >
                    ..voir plus
                  </p>
                  <span>Publier le {article.publishDate}</span>
                </article>
              </div>
            ))}
          </div>
          {/* SOCIAL */}
        </section>
      </main>
      </main>
    </div>
  )
}

export default Body_Search
