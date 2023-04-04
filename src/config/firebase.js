
import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBm94zh124sWTZHSPEXDLR_Z9bNvZJ1Wbk",
  authDomain: "tiktok---jornada-1716a.firebaseapp.com",
  projectId: "tiktok---jornada-1716a",
  storageBucket: "tiktok---jornada-1716a.appspot.com",
  messagingSenderId: "1016423148613",
  appId: "1:1016423148613:web:c5bfb07feea9699529c72c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;