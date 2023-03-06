import React, { useState } from "react";

import "../../styles/partials/Header.scss";

import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container-header">
      <section className="container-header__nav">
        <a className="nav-link" href="#">
          <span className="header-title">FRONT END DEVELOPER</span>
        </a>

        <nav className="container-nav">
          <button className="container-iconMenu" onClick={toggleMenu}>
            <FiMenu className="icon-menu" size={24} />
          </button>
          <ul
            className={
              isOpen ? "container-nav__items open" : "container-nav__items"
            }
          >
            <li className="nav-items">
              <a href="#home">Home</a>
            </li>

            <li className="nav-items">
              <a href="#aboutme">Sobre mim</a>
            </li>

            <li className="nav-items">
              <a href="#habilities">Habilidades</a>
            </li>

            <li className="nav-items">
              <a href="#projects">Projetos</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
