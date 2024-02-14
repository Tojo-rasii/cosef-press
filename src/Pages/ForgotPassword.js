import React, { useState } from 'react';
import { auth, database } from '../firebase/FirebaseConfig'; // Importez votre objet d'authentification Firebase
import { sendPasswordResetEmail } from 'firebase/auth'; // Importez votre objet d'authentification Firebase
import { collection, query, where, getDocs } from 'firebase/firestore'; // Importez les fonctions de requête Firestore

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleResetPassword = async () => {
        try {
            // Vérifiez si l'e-mail existe dans la base de données userData
            const userDataRef = collection(database, 'userData');
            const querySnapshot = await getDocs(query(userDataRef, where('email', '==', email)));

            if (querySnapshot.empty) {
                setError("L'e-mail fourni n'est pas associé à un compte.");
                return;
            }

            // L'e-mail existe dans la base de données, envoyez l'e-mail de réinitialisation
            await sendPasswordResetEmail(auth, email);
            setMessage('Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.');
            setError(null);
        } catch (error) {
            console.error(error);
            setMessage(null);
        }
    };

    return (
        <div>
            <h2>Mot de passe oublié</h2>
            {error && <div className="error">{error}</div>}
            {message && <div className="message">{message}</div>}
            <input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
        </div>
    );
}

export default ForgotPassword;
