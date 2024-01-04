import React from 'react'
import { useState, useEffect } from 'react';

function Profile_Logs() {
    const [loggedInUserData, setLoggedInUserData] = useState({});

    // useEffect pour récupérer les informations de l'utilisateur connecté lors du rendu initial
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            setLoggedInUserData(loggedInUser);
        }
    }, []);
  return (
    <div>
        <main className='d-flex justify-content-center' style={{paddingTop : "15em"}}>
            <div>
                <section>
                    <p>Nom : {loggedInUserData.username}</p>
                    <p>Email : {loggedInUserData.email}</p>
                </section>
            </div>
        </main>
    </div>
  )
}

export default Profile_Logs