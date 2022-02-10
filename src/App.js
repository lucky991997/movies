import 'swiper/scss'

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'swiper/swiper.min.css'
import "./assets/boxicons-2.1.1/css/boxicons.min.css";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import RoutesConfig from "./config/Routes";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD3yRQksPtMrKAUKWq14lZKgxvghW-DH4",
  authDomain: "movies-abca2.firebaseapp.com",
  projectId: "movies-abca2",
  storageBucket: "movies-abca2.appspot.com",
  messagingSenderId: "1051827479324",
  appId: "1:1051827479324:web:79cb6c26e6ec170e4ad0d9",
  measurementId: "G-86XMZ00F3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Header {...props}/>
          <RoutesConfig />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
