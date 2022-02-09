import 'swiper/scss'

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'swiper/swiper.min.css'
import "./assets/boxicons-2.1.1/css/boxicons.min.css";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import RoutesConfig from "./config/Routes";


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
