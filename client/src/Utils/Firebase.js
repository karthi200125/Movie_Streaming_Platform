import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrGs2Q9dFDRgLlI6P1Ar31tnKVR3UELqU",
    authDomain: "movie-streaming-ee46b.firebaseapp.com",
    projectId: "movie-streaming-ee46b",
    storageBucket: "movie-streaming-ee46b.appspot.com",
    messagingSenderId: "205557536189",
    appId: "1:205557536189:web:871b61eb5465e40fb4eed4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, app };