import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBAE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBAE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBAE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBAE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBAE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBAE_API_ID,
  measurementId: import.meta.env.VITE_FIREBAE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
