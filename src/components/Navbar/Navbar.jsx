import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gust} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Početna</a></li>
        <li className="p__opensans"><a href="#about">O nama</a></li>
        <li className="p__opensans"><a href="#menu">Meni</a></li>
        <li className="p__opensans"><a href="#awards">Nagrade</a></li>
        <li className="p__opensans"><a href="#contact">Kontakt</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Prijava / Registracija</a>
        <div />
        <a href="/" className="p__opensans">Rezerviši sto</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Početna</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>O nama</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Meni</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Nagrade</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Kontakt</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
