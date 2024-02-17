import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { database } from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';

function AddVideo() {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // video
    const [video, setVideo] = useState(null);
    const [videoId, setVideoId] = useState(null);

    // VIDEO
    const handleVideoSubmit = async (event) => {
        event.preventDefault();
    
        if (!video) {
            alert('Please select a video file.');
            return;
        }
    
        const storage = getStorage();
        const storageRef = ref(storage, `videos/${video.name}`);
    
        try {
            await uploadBytes(storageRef, video);
            console.log('Video uploaded successfully');
            
            const videos = {
                type: type,
                title: title,
                videoUrl: `videos/${video.name}`, // Update with the appropriate URL
                description: description,
                publishDate: new Date().toLocaleDateString()
            };
    
            if (type === "social" || type === "culturel" || type === "sport") {
                alert("you are publish with success");
            }
            else {
                alert("please add social or culturel or sport ");
                return;
            }
    
            const docRef = await addDoc(collection(database, 'videoPublished'), videos);
            console.log('Document ajouté avec l\'ID :', docRef.id);
            setVideoId(docRef.id);
    
            setType('');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error uploading video or adding data:', error);
        }
    };
    
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        console.log('Selected video file:', file); 

        reader.onloadend = () => {
            setVideo(reader.result);
        };

        // Check if a file is selected and if it is an image
        if (file && file.type.startsWith('video/')) {
            reader.readAsDataURL(file);
        } else {
            // Handle the case where the selected file is not an image
            alert('Invalid file format. Please select an video.');
        }
    };
    return (
        <div>
            <main className="m-2 bg-white p-2 w-75 d-flex flex-row gap-5">

                <section className="d-flex flex-column flex-wrap gap-3">
                    <article className='p-3 bg-body-secondary'>
                        <p className='fw-semibold'>VIDEO ACTUALITE</p>

                        <form onSubmit={handleVideoSubmit} class="d-flex flex-column gap-2">
                            <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type de l'article" required />
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre de l'article" required />
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de l'article" required></textarea>
                            <input type="file" onChange={handleVideoChange} required />
                            <button type="submit">Publier</button>
                        </form>

                        {/* Lien vers Body_Actualite avec les données de l'article */}
                        {videoId && (
                            <Link to={`/article/${videoId}`}>Voir l'article</Link>
                        )}
                    </article>
                </section>
            </main>
        </div>
    );
}

export default AddVideo;
