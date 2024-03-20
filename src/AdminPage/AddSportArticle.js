import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import noImage from '../Tools/images/no-picture-available-icon-9.jpg'


function AddSportArticle() {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    // article
    const [articleId, setArticleId] = useState(null);
    //select image
    const [selectedImage, setSelectedImage] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const article = {
            type: type,
            title: title,
            imageUrl: image,
            description: description,
            publishDate: new Date().toLocaleDateString()
        };

        if (type === "sport") {
            alert("you are publish with success");
        }
        else {
            alert("please add social or culturel or sport ");
            return;
        }

        try {
            const docRef = await addDoc(collection(database, 'articleSportPublished'), article);
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
            setSelectedImage(reader.result);
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
        <div className='d-flex flex-row justify-content-between gap-2'>
            {/* <p className='text-uppercase m-3 fw-bold'>body_Actualite</p> */}
            <main className="m-2 bg-white p-4 d-flex flex-row gap-5" style={{ outline: "1px solid silver", width: "200%" }}>
                <section className="d-flex flex-column flex-wrap gap-3">
                    <article className='p-3 bg-light' style={{ outline: "1px solid silver" }}>
                        <p className='fw-semibold'>ARTICLE SPORT</p>

                        <form onSubmit={handleSubmit} class="d-flex flex-column gap-3">
                            <select value={type} onChange={(e) => setType(e.target.value)} required>
                                <option value="">Sélectionnez le type d'article</option>
                                <option value="sport">sport</option>
                            </select>
                            {/* <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type de l'article" required /> */}
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
                <section>
                    {/* Affiche l'image sélectionnée */}
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
                        <span className='fs-1'>9</span>
                        <sub className='mt-2'>/ 03 max</sub>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default AddSportArticle;
