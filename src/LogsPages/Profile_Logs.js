import React, { useState, useEffect } from 'react';
import profile from '../Tools/images/profile.png';

function Profile_Logs() {
    const [loggedInUserData, setLoggedInUserData] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            setLoggedInUserData(loggedInUser);
        }

        const storedImage = localStorage.getItem('selectedImage');
        if (storedImage) {
            setSelectedImage(storedImage);
        }
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Convertir le Blob en une chaîne de caractères base64
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setSelectedImage(base64String);

                // Sauvegarder la chaîne de caractères base64 dans le localStorage
                localStorage.setItem('selectedImage', base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <main className='d-flex justify-content-center' style={{ paddingTop: "11em" }}>
                <div>
                    <section className='d-flex flex-column gap-1 align-items-center bg-white p-2 shadow-sm'>
                        <article className='profileLogs-image'>
                            <img
                                src={selectedImage || profile}
                                alt="profile"
                            />
                            <i className='bi-plus-circle-fill rounded-circle text-success fs-3' onClick={() => document.getElementById('imageInput').click()}>
                            </i>
                        </article>
                        <article className="mt-2">
                            <p className='p-2 bg-body-secondary text-capitalize'><span className='fw-bold'>Nom :</span> {loggedInUserData.username}</p>
                            <p className='p-2 bg-body-secondary'><span className='fw-bold'>Email :</span> {loggedInUserData.email}</p>
                        </article>
                        <input
                            type="file"
                            id="imageInput"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Profile_Logs;
