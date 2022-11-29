import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDaKzFp99cpzmcHV1ymYSem606P0oGicvs",
  authDomain: "smart-field-service1.firebaseapp.com",
  projectId: "smart-field-service1",
  storageBucket: "smart-field-service1.appspot.com",
  messagingSenderId: "563096068498",
  appId: "1:563096068498:web:fcdd840d1c13eb62d1214b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
