import React from "react";

import { Link } from "react-router-dom";

import "./footer.scss";

import logo from "../../assets/images/tmovie.png";

const Footer = () => {
  const infoPath = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact us",
      path: "/contact",
    },
    {
      name: "Term of Service",
      path: "/service",
    },
    {
      name: "About us",
      path: "/about",
    },
  ];
  const infoPolicy = [
    {
      name: "Live",
      path: "/",
    },
    {
      name: "FAQ",
      path: "/",
    },
    {
      name: "Premium",
      path: "/",
    },
    {
      name: "Pravacy policy",
      path: "/",
    },
  ];
  const infoTmovie = [
    {
      name: "You must",
      path: "/",
    },
    {
      name: "Recent release",
      path: "/",
    },
    {
      name: "TOP IMDB",
      path: "/",
    },
  ];
  return (
    <div>
      <div className="footer">
        <div className="footer__content container">
          <div className="footer__content__logo">
            <div className="logo">
              <img src={logo} alt="logo" />
              <Link to="/">tMovies</Link>
            </div>
          </div>
          <div className="footer__content__menus">
            <div className="footer__content__menu">
              {infoPath.map((item, index) => (
                <Link to={item.path} key={index}>
                  <p className="footer__content__menu__text">{item.name}</p>
                </Link>
              ))}
            </div>
            <div className="footer__content__menu">
              {infoPolicy.map((item, index) => (
                <Link to={item.path} key={index}>
                  <p className="footer__content__menu__text">{item.name}</p>
                </Link>
              ))}
            </div>
            <div className="footer__content__menu">
              {infoTmovie.map((item, index) => (
                <Link to={item.path} key={index}>
                  <p className="footer__content__menu__text">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
