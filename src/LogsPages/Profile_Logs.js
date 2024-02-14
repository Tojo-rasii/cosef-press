import React, { useState, useEffect } from 'react';
import profile from '../Tools/images/profile.png';
import { auth, database, storage } from '../firebase/FirebaseConfig'; // Assuming you have initialized Firebase in a separate file

function Profile_Logs() {
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Set up Firebase auth state observer
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, set the email to the state
                setLoggedInUserEmail(user.email);
            } else {
                // No user is signed in, clear the state
                setLoggedInUserEmail('');
            }
        });

        // Clean up the observer
        return () => unsubscribe();
    }, []);

    // useEffect(() => {
    //     // Fetch user's image from Firebase Storage
    //     if (loggedInUserEmail) {
    //         const imageRef = storage.ref(`images/${loggedInUserEmail}`);
    //         imageRef.getDownloadURL().then(url => {
    //             setSelectedImage(url);
    //         }).catch(error => {
    //             // Handle error
    //             console.error('Error fetching image from Firebase Storage:', error);
    //         });
    //     }
    // }, [loggedInUserEmail]);

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    
    //     if (file) {
    //         // Upload the image to Firebase Storage
    //         const imageRef = storage.ref(`images/${loggedInUserEmail}`);
    //         imageRef.put(file).then(snapshot => {
    //             // Image uploaded successfully, get the download URL
    //             imageRef.getDownloadURL().then(url => {
    //                 setSelectedImage(url);
    
    //                 // Store the image URL in localStorage
    //                 localStorage.setItem('selectedImage', url);
    
    //                 // Store the image URL in Firebase Firestore or Realtime Database along with user data
    //                 const userRef = database.collection('userData').doc(loggedInUserEmail);
    //                 userRef.set({ email: loggedInUserEmail, imageUrl: url }, { merge: true });
    //             }).catch(error => {
    //                 // Handle error
    //                 console.error('Error fetching image URL:', error);
    //             });
    //         }).catch(error => {
    //             // Handle error
    //             console.error('Error uploading image to Firebase Storage:', error);
    //         });
    //     }
    // };
    

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
                            <p className='p-2 bg-body-secondary text-capitalize'><span className='fw-bold'>Nom :</span> {loggedInUserEmail}</p>
                            <p className='p-2 bg-body-secondary'><span className='fw-bold'>Email :</span> {loggedInUserEmail}</p>
                        </article>
                        <input
                            type="file"
                            id="imageInput"
                            style={{ display: "none" }}
                            
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Profile_Logs;
