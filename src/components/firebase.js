import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const provider = new GoogleAuthProvider();

// Custom hook for navigation
// const useCustomNavigate = () => {
//   return useNavigate();
// };
export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup };

// Google auth with popup
// export const handleGoogleSignIn = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//       navigate("/landing-page");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// export const useGoogleSignIn = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleGoogleSignIn = async () => {
//       try {
//         const result = await signInWithPopup(auth, provider);
//         console.log(result);
//         navigate("/landing-page");
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     handleGoogleSignIn();
//   }, [ navigate]);

//   return null; // Since this hook doesn't render anything, return null
// };