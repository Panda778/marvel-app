import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import { useState, useContext } from "react";
import Navdrop from "../navdrop/navdrop";
import { FilmsContext } from "../../context/films-context";

function Navbar() {
  const films = useContext(FilmsContext)[0];

  const [visible, setVisible] = useState(false);

  function showNav() {
    setVisible(true);
  }
  function hideNav() {
    setVisible(false);
  }
  const links = [
    {
      title: "Главная",
      url: "/",
      icon: "fas fa-home",
    },
    {
      title: "Избранное",
      url: "/favourite",
      icon: "fas fa-heart",
    },
    {
      title: "О нас",
      url: "/about",
      icon: "fas fa-info-circle",
    },
  ];
  return (
    <nav className="navigation">
      <Link to={"/"}>
        <img src={Logo} height="45" alt="logo" />
      </Link>
      <button onClick={showNav} className="navbar-toggler">
        <span className="navbar-toggler-ic"></span>
        <span className="navbar-toggler-ic"></span>
        <span className="navbar-toggler-ic"></span>
      </button>
      {visible === true ? <Navdrop hideNav={hideNav} /> : null}
      <ul
        className={`navigation__list ${
          visible ? "navigation__list--active" : ""
        }`}
      >
        {links.map(function (link, index) {
          if (link.title === "Избранное") {
            return (
              <li onClick={hideNav} key={index} className="navigation__item">
                <Link
                  to={link.url}
                  className="navigation__link navigation__favlink"
                >
                  <i className={link.icon}></i>
                  <span className="navigation__item--counter">
                    {films.favFilms.length}
                  </span>{" "}
                  {link.title}
                </Link>
              </li>
            );
          }
          return (
            <li onClick={hideNav} key={index} className="navigation__item">
              <Link to={link.url} className="navigation__link">
                <i className={link.icon}></i> {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
