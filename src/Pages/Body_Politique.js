import { React, useState, useEffect } from 'react'
import Image from '../Tools/images/anatalaha2.jpg'
import Image2 from '../Tools/images/cosef.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebase/FirebaseConfig';


function Body_Sport() {
    const [articles, setArticles] = useState([]);
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const querySnapshot = await getDocs(collection(database, 'articlePolitiquePublished'));
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
                const querySnapshot = await getDocs(collection(database, 'videoPolitiquePublished'));
                const fetchedVideos = [];
                querySnapshot.forEach((doc) => {
                    fetchedVideos.push(doc.data());
                });
                console.log('Videos fetched:', fetchedVideos); 
                setVideos(fetchedVideos);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles :', error);
            }
        };

        fetchVideos();
    }, []);


    // Créez une URL avec les informations de la vidéo
    const redirectToVideo = (video) => {
        const url = `/video?type=${video.type}&title=${video.title}&description=${encodeURIComponent(video.description)}&publishDate=${video.publishDate}&videoUrl=${video.videoUrl}&imageUrl=${video.imageUrl}`;

        console.log('Redirecting to video:', url);

        // Redirigez vers la nouvelle page
        navigate(url);
    };
    return (
        <div>
            <main className='ALaUne'>
                {/* contenue article SECTION */}
                {/* section-photo */}
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
                    {videos.map((video, index) => (
                        <section key={index} className={video && video.type ? video.type.toLowerCase() : ''} onClick={() => redirectToVideo(video)}>
                            <article>
                                <picture>
                                    <video poster={video && video.imageUrl ? video.imageUrl : ''} controls>
                                        <source src={video && video.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </picture>
                                <span className='position-absolute iconPlay'>
                                    <i className='bi-play-circle-fill text-black'><span>&nbsp;{video && video.duration ? video.duration : ''}</span></i>
                                </span>
                            </article>
                            <article>
                                <span id='type'>{video && video.type ? video.type : ''}</span>
                                <span id="titleOverflow">{video && video.title ? video.title : ''}</span>
                                <span className='d-none'>{video && video.description ? video.description : ''}</span>
                                <span>Publié le {video && video.publishDate ? video.publishDate : ''}</span>
                            </article>
                        </section>
                    ))}

                </div>
            </main>
        </div>
    )
}

export default Body_Sport
