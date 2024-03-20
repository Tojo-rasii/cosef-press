import React, { useState, useEffect } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { database } from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import noImage from '../Tools/images/no-picture-available-icon-9.jpg'
import { useSpring, animated } from 'react-spring';

function AddPolitiqueArticle() {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [articleId, setArticleId] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [articleNumber, setArticleNumber] = useState(0);

    useEffect(() => {
        async function fetchArticleCount() {
            const querySnapshot = await getDocs(collection(database, 'articlePolitiquePublished'));
            setArticleNumber(querySnapshot.size);
        }

        fetchArticleCount();
    }, [articleId]); // Re-run the effect when articleId changes

    const handleSubmit = async (event) => {
        event.preventDefault();

        const article = {
            type: type,
            title: title,
            imageUrl: image,
            description: description,
            publishDate: new Date().toLocaleDateString()
        };

        if (type === "politique") {
            alert("you are publish with success");
        }
        else {
            alert("please add social or culturel or sport ");
            return;
        }

        try {
            const docRef = await addDoc(collection(database, 'articlePolitiquePublished'), article);
            console.log('Document ajouté avec l\'ID :', docRef.id);
            setArticleId(docRef.id);

            setType('');
            setTitle('');
            setDescription('');
            setImage(null);

            if (articleNumber >= 6) {
                alert('Vous avez atteint le nombre maximum d\'articles.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'article :', error);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
            setSelectedImage(reader.result);
        };

        if (file && file.type.startsWith('image/')) {
            reader.readAsDataURL(file);
        } else {
            alert('Invalid file format. Please select an image.');
        }
    };

     // Animation du trait SVG en fonction du nombre d'articles
     const strokeAnimation = useSpring({
        from: { strokeDashoffset: 0 },
        to: { strokeDashoffset: 440 - (440 * articleNumber) / 6 },
        config: { duration: 2000 },
    });

    return (
        <div className='d-flex flex-row justify-content-between gap-2'>
            <main className="m-2 bg-white p-4 d-flex flex-row gap-5" style={{ outline: "1px solid silver", width: "200%" }}>
                <section className="d-flex flex-column flex-wrap gap-3">
                    <article className='p-3 bg-light' style={{ outline: "1px solid silver" }}>
                        <p className='fw-semibold'>ARTICLE POLITIQUE</p>

                        <form onSubmit={handleSubmit} class="d-flex flex-column gap-3">
                            <select value={type} onChange={(e) => setType(e.target.value)} required>
                                <option value="">Sélectionnez le type d'article</option>
                                <option value="politique">politique</option>
                            </select>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre de l'article" required />
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de l'article" required></textarea>
                            <input type="file" onChange={handleImageChange} required />
                            <button type="submit">Publier</button>
                        </form>

                        {articleId && (
                            <Link to={`/article/${articleId}`}>Voir l'article</Link>
                        )}
                    </article>
                </section>
                <section>
                    {selectedImage && (
                        <img src={selectedImage} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: '100%', outline: "1px solid silver" }} />
                    )}
                    {!selectedImage === true && (
                        <img src={noImage} alt="reset" style={{ maxWidth: '100%', maxHeight: '100%', outline: "1px solid silver", opacity : "0.5" }} />
                    )}
                </section>
            </main>
            <main className='d-flex flex-column gap-3 text-center mt-2'>
                <section className='d-flex flex-column gap-2 pb-4 bg-white p-2 shadow-sm' style={{ outline: "1px solid silver" }}>
                    <article>
                        <span><i className='bi-info-circle'>&nbsp;</i></span>
                        <span className='text-uppercase fw-semibold'>details design</span>
                    </article>
                    <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat, reiciendis aspernatur omnis fugiat at temporibus praesentium accusamus soluta labore!</article>
                </section>
                <section className='d-flex flex-column gap-1 pb-4 bg-white p-2 shadow-sm' style={{ outline: "1px solid silver" }}>
                    <article className='text-uppercase fw-semibold'>Article Number</article>
                    <article className='bg-light NumberCircle'>
                    <svg width="150" height="150">
                        <circle cx="75" cy="75" r="70" fill="none" stroke="silver" strokeWidth="10" />
                        <animated.circle
                            cx="75"
                            cy="75"
                            r="70"
                            fill="none"
                            stroke="blue"
                            strokeWidth="10"
                            strokeDasharray="440"
                            strokeDashoffset={strokeAnimation.strokeDashoffset}
                        />
                        <text x="50%" y="50%" textAnchor="middle" stroke="#000" strokeWidth="1px" dy=".3em">{articleNumber} / 6 max</text>
                    </svg>
                       
                    </article>
                </section>
            </main>
        </div>
    );
}

export default AddPolitiqueArticle;
