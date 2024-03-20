import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from "uuid"
import { database } from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';


function AddSocialVideo() {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // video
    const [video, setVideo] = useState(null);
    // const [videoId, setVideoId] = useState(null);
    // poster image
    const [image, setImage] = useState(null);
    //Select video
    const [selectedVideo, setSelectedVideo] = useState(null);



    // VIDEO
    const handleVideoSubmit = async (event) => {
        event.preventDefault();

        if (!video) {
            alert('Please select a video file.');
            return;
        }
        const storage = getStorage();
        const fileName = `videoSocial/${video.name}`;
        const storageRef = ref(storage, fileName);

        try {
            await uploadBytes(storageRef, video);
            alert("Published on Firebase successfully");
            console.log('Video uploaded successfully');
            const videoBaseUrl = 'https://storage.googleapis.com/cosef-server.appspot.com/videoSport/';

            const videos = {
                type: type,
                title: title,
                imageUrl: image,
                videoUrl: `${videoBaseUrl}${video.name}`,
                description: description,
                publishDate: new Date().toLocaleDateString(),
                duration: calculateDuration(video.duration)
            };


            function calculateDuration(durationInSeconds) {
                // Convertir la durée de la vidéo en heures, minutes et secondes
                const hours = Math.floor(durationInSeconds / 3600);
                const minutes = Math.floor((durationInSeconds % 3600) / 60);
                const seconds = durationInSeconds % 60;
                if (isNaN) {
                    return '00:00:00'
                }
                // Retourner la durée formatée
                return `${hours}:${minutes}:${seconds}`;
            }

            if (type === "social") {
                alert("you are publish with success");
            }
            else {
                alert("please add social or culturel or sport ");
                return;
            }

            const docRef = await addDoc(collection(database, 'videoSocialPublished'), videos);
            console.log('Document ajouté avec l\'ID :', docRef.id);
            // setVideoId(docRef.id);

            setType('');
            setTitle('');
            setDescription('')
        } catch (error) {
            console.error('Error uploading video or adding data:', error);
        }
    };

    // POSTER IMAGE
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

    // const handleVideoChange = (event) => {
    //     const file = event.target.files[0];
    //     console.log('Selected file:', file);
    //     console.log('Event:', event);
    //     console.log('Selected files:', event.target.files)

    //     // Check if a file is selected
    //     if (file) {
    //         console.log('File MIME type:', file.type);
    //         console.log('File name:', file.name); // Vérifiez le nom du fichier

    //         // Check if the MIME type starts with 'video/'
    //         if (file.type && file.type.startsWith('video/')) {
    //             const reader = new FileReader();

    //             // Définir la fonction de rappel pour la fin de la lecture du fichier
    //             reader.onloadend = () => {
    //                 // Mise à jour de l'état avec le fichier vidéo sélectionné
    //                 setVideo(file);
    //                 // Mise à jour de l'état avec l'URL de données du fichier vidéo pour affichage
    //                 setSelectedVideo(reader.result);
    //             };

    //             // Lire le contenu du fichier en tant qu'URL de données (Data URL)
    //             reader.readAsDataURL(file);
    //         } else {
    //             // Gérer le cas où le fichier sélectionné n'est pas une vidéo
    //             alert('Invalid file format. Please select a video.');
    //         }
    //     } else {
    //         // Gérer le cas où aucun fichier n'est sélectionné
    //         alert('Please select a file.');
    //     }
    // };






    // const handleVideoChange = (event) => {
    //     const file = event.target.files[0];

    //     // Vérifier si un fichier est sélectionné et s'il s'agit d'une vidéo
    //     if (file && file.type.startsWith('video/')) {
    //         const reader = new FileReader();

    //         reader.onloadend = () => {
    //             console.log('Video file read successfully:', file);
    //             console.log('Local URL of the video:', URL.createObjectURL(file));
    //             setSelectedVideo(URL.createObjectURL(file)); // Utiliser URL.createObjectURL pour obtenir une URL de fichier local
    //             setVideo(file); // Stocker le fichier vidéo lui-même
    //         };

    //         reader.readAsArrayBuffer(file); // Utiliser readAsArrayBuffer pour récupérer les données brutes du fichier
    //     } else {
    //         // Gérer le cas où le fichier sélectionné n'est pas une vidéo
    //         alert('Invalid file format. Please select a video.');
    //     }
    // };


    const handleVideoChange = (event) => {
        const file = event.target.files[0];

        // Vérifier si un fichier est sélectionné et s'il s'agit d'une vidéo
        if (file && file.type.startsWith('video/')) {
            setVideo(file);
            console.log('Selected video file:', file);
        } else {
            // Gérer le cas où le fichier sélectionné n'est pas une vidéo
            alert('Invalid file format. Please select a video.');
        }           
    };
    

    return (
        <div className='d-flex flex-row justify-content-between gap-2'>
            <main className="m-2 bg-white p-4 d-flex flex-row gap-5" style={{ outline: "1px solid silver", width: "200%" }}>

                <section className="d-flex flex-column flex-wrap gap-2">
                    <article className='p-3 bg-light' style={{ outline: "1px solid silver" }}>
                        <p className='fw-semibold'>VIDEO SOCIAL</p>

                        <form onSubmit={handleVideoSubmit} class="d-flex flex-column gap-3">
                            <select value={type} onChange={(e) => setType(e.target.value)} required>
                                <option value="">Sélectionnez le type d'article</option>
                                <option value="social">social</option>
                            </select>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre de l'article" required />
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de l'article" required></textarea>
                            <label htmlFor="">Video</label>
                            <input type="file" onChange={handleVideoChange} required />
                            <label htmlFor="">Poster Image</label>
                            <input type="file" onChange={handleImageChange} required />
                        <button type="submit">Publier</button>
                        </form>

                        {/* Lien vers Body_Actualite avec les données de l'article */}
                        {/* {videoId && (
                            <Link to={`/article/${videoId}`}>Voir l'article</Link>
                        )} */}
                    </article>
                </section>

                <section>
                    {/* Affiche l'image sélectionnée */}
                    {selectedVideo && (
                        <video controls style={{ maxWidth: '60%', maxHeight: '60%', outline: "2px solid #000" }} >
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                    <article className='text-uppercase fw-semibold'>Video Number</article>
                    <article className='bg-light NumberCircle'>
                        <span className='fs-1'>9</span>
                        <sub className='mt-2'>/ 03 max</sub>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default AddSocialVideo;
         
