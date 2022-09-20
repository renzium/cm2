// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqNbdDw4nNXar2iKG2iujBLOKNcgqozbE",
  authDomain: "coinmercari.firebaseapp.com",
  projectId: "coinmercari",
  storageBucket: "coinmercari.appspot.com",
  messagingSenderId: "519347227450",
  appId: "1:519347227450:web:4ba87b95d1bc9d573e9e03",
  databaseURL: "https://coinmercari-default-rtdb.firebaseio.com",
  storageBucket: "coinmercari.appspot.com"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const auth = getAuth(app)
const storage = getStorage(app)
export default {auth, database, storage}