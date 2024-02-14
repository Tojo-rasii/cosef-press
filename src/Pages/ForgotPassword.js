import React, { useState } from 'react';
import { auth, sendPasswordResetEmail } from '../firebase/FirebaseConfig';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSendCode = async () => {
// Example usage of sendPasswordResetEmail

// const response = await sendPasswordResetEmail(auth, email);
// console.log('Firebase Response:', response);

    auth.sendPasswordResetEmail(email)
      .then(() => {
        // Gérer la réussite de l'envoi du courrier de réinitialisation
        setIsCodeSent(true);
        setError(null);
      })
      .catch((error) => {
        // Gérer les erreurs
        console.error('Error sending password reset email:', error);
        setError(error.message);
      });
  };

  const handleResetPassword = async () => {
    try {
      // La réinitialisation du mot de passe se fait en suivant le lien de réinitialisation envoyé par e-mail,
      // il n'y a pas besoin de cette étape côté client.
      // La réinitialisation sera effectuée après que l'utilisateur ait suivi le lien.

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Mot de passe oublié</h2>
      {isCodeSent ? (
        <>
          <p>Un code de confirmation a été envoyé à votre adresse e-mail. Veuillez le saisir ci-dessous :</p>
          <label>
            Code de confirmation :
            <input type="email" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} autoComplete='on' />
          </label>
          <label>
            Nouveau mot de passe :
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </label>
          <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
        </>
      ) : (
        <>
          <p>Entrez votre adresse e-mail pour recevoir un code de confirmation :</p>
          <label>
            Adresse e-mail :
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button onClick={handleSendCode}>Envoyer le code</button>
        </>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
