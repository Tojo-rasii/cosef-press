import Image from '../Tools/images/anatalaha2.jpg'
import Images from '../Tools/images/staffCosef.jpg'
import Image2 from '../Tools/images/Fiaonana1.jpg'
// VIDEO
import Video from '../Tools/video/video1.mp4'
import Video2 from '../Tools/video/video2.mp4'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import AddArticle from '../AdminPage/AddArticle'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebase/FirebaseConfig';


function Body_Actualite() {

    const [articles, setArticles] = useState([]);
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
   
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const querySnapshot = await getDocs(collection(database, 'articlePublished'));
                const fetchedArticles = [];
                querySnapshot.forEach((doc) => {
                    fetchedArticles.push(doc.data());
                });
                setArticles(fetchedArticles);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles :', error);
            }
        };

        fetchArticles();
    }, []);

    // CLICK ARTICLE
    // Fonction pour rediriger vers la page de l'article détaillé
    const redirectToArticle = (article) => {
        const url = `/article?type=${article.type}&imageUrl=${encodeURIComponent(
            article.imageUrl
        )}&title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(
            article.description
        )}&publishDate=${article.publishDate}`;

        navigate(url);
    };


    // VIDEO
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const querySnapshot = await getDocs(collection(database, 'videoPublished'));
                const fetchedVideos = [];
                querySnapshot.forEach((doc) => {
                    fetchedVideos.push(doc.data());
                });
                setVideos(fetchedVideos);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles :', error);
            }
        };

        fetchVideos();
    }, []);

    // CLICK VIDEO 
    // Créez une URL avec les informations de la vidéo
    const redirectToVideo = (video) => {
        const url = `/video?type=${video.type}&title=${video.title}&description=${encodeURIComponent(video.description)}&publishDate=${video.publishDate}&videoUrl=${video.videoUrl}&imageUrl=${video.imageUrl}`;

        // Redirigez vers la nouvelle page
        navigate(url);
    };

    // const [articles, setArticles] = useState([]);

    // Fonction pour ajouter un nouvel article à la liste des articles
    // const addNewArticle = (newArticle) => {
    //     setArticles([...articles, newArticle]);
    // };
    return (
        <div>
            <main className='ALaUne'>
                {/* contenue article SECTION */}
                {/* Contenu article SECTION */}
                <div className='ArticlePhoto'>
                    <p className='text-uppercase fw-semibold fs-4 titleActu'>Actualité</p>
                    {articles.map((article, index) => (
                        <section key={index} className={article && article.type ? article.type.toLowerCase() : ''} onClick={() => redirectToArticle(article)}>
                            <article>
                                <picture>
                                    <img src={article && article.imageUrl ? article.imageUrl : ''} alt="Antalaha" />
                                </picture>
                            </article>
                            <article className="voir-plus">
                                <span id='type'>{article && article.type ? article.type : ''}</span>
                                <span id="titleOverflow">{article && article.title ? article.title : ''}</span>
                                <span>{article && article.description ? article.description : ''}</span>
                                <span>Publié le {article && article.publishDate ? article.publishDate : ''}</span>
                            </article>
                        </section>
                    ))}
                </div>
                {/* contenue article SECTION */}
                {/* section-video */}
                <div className='ArticleVideo'>
                    <p className='text-uppercase fw-semibold fs-4 titleVideo'>WEB TV</p>
                    {videos.map((article, index) => (

                        <section key={index} className={article && article.type ? article.type.toLowerCase() : ''}
                            onClick={() => redirectToVideo(article)}>
                            <article>
                                <picture>
                                    <video poster={article && article.imageUrl ? article.imageUrl : ''} controls>
                                        <source src={article.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </picture>
                                <span className='position-absolute iconPlay'>
                                    <i className='bi-play-circle-fill text-black'><span>&nbsp;{article && article.duration ? article.duration : ''}</span></i>
                                </span>
                            </article>
                            <article>
                                <span id='type'>{article && article.type ? article.type : ''}</span>
                                <span id="titleOverflow">{article && article.title ? article.title : ''}</span>
                                <span className='d-none'>{article && article.description ? article.description : ''}</span>
                                <span>Publier le {article && article.publishDate ? article.publishDate : ''}</span>
                            </article>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Body_Actualite
