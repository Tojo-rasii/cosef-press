import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyAAfF3IDol7VAr_UiKn4pN9Sh6rTn0ttBo",
    authDomain: "cosef-server.firebaseapp.com",
    projectId: "cosef-server",
    storageBucket: "cosef-server.appspot.com",
    messagingSenderId: "396624745381",
    appId: "1:396624745381:web:bcbcf0f4ed56162e47ce4c",
    measurementId: "G-08ZGLR7QKH"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };