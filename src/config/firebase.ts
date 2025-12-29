import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBNVnhGUlYw6z-mjapdJuj9Hp3l5z_ESCY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "my-portfolio-db-8e7ac.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "my-portfolio-db-8e7ac",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "my-portfolio-db-8e7ac.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "640921515154",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:640921515154:web:528be384c173cf632e224b",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);
