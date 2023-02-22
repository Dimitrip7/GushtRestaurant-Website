import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kontaktirajte nas</h1>
        <p className="p__opensans">Dragoslava Jovanovića 2, Beograd</p>
        <p className="p__opensans">+381 66 132 245</p>
        <p className="p__opensans">+381 65 133 244</p>
      </div>

      <div className="app__footer-links_logo"  >
        <img src={images.gust} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Radno vreme</h1>
        <p className="p__opensans">Ponedeljak-Petak:</p>
        <p className="p__opensans">08:00  - 12:00 </p>
        <p className="p__opensans">Subota-Nedelja:</p>
        <p className="p__opensans">07:00  - 11:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gušt. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;