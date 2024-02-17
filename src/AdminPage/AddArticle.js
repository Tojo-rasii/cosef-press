import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';

function AddArticle() {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    // article
    const [articleId, setArticleId] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const article = {
            type: type,
            title: title,
            imageUrl: image,
            description: description,
            publishDate: new Date().toLocaleDateString()
        };

        if (type === "social" || type === "culturel" || type === "sport") {
            // alert("you are publish with success");
        }
        else {
            alert("please add social or culturel or sport ");
            return;
        }

        try {
            const docRef = await addDoc(collection(database, 'articlePublished'), article);
            console.log('Document ajouté avec l\'ID :', docRef.id);
            setArticleId(docRef.id);

            setType('');
            setTitle('');
            setDescription('');
            setImage(null);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'article :', error);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        // Check if a file is selected and if it is an image
        if (file && file.type.startsWith('image/')) {
            reader.readAsDataURL(file);
        } else {
            // Handle the case where the selected file is not an image
            alert('Invalid file format. Please select an image.');
        }
    };

    return (
        <div>
            <p className='text-uppercase m-3 fw-bold'>body_Actualite</p>
            <main className="m-2 bg-white p-2 w-75 d-flex flex-row gap-5">
                <section className="d-flex flex-column flex-wrap gap-3">
                    <article className='p-3 bg-body-secondary'>
                        <p className='fw-semibold'>ARTICLE ACTUALITE</p>

                        <form onSubmit={handleSubmit} class="d-flex flex-column gap-2">
                            <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type de l'article" required />
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre de l'article" required />
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de l'article" required></textarea>
                            <input type="file" onChange={handleImageChange} required />
                            <button type="submit">Publier</button>
                        </form>

                        {/* Lien vers Body_Actualite avec les données de l'article */}
                        {articleId && (
                            <Link to={`/article/${articleId}`}>Voir l'article</Link>
                        )}
                    </article>
                </section>
            </main>
        </div>
    );
}

export default AddArticle;
