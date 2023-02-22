import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">O Nama</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Dobrodošli u naš restoran! Naš restoran je mesto gde možete uživati u vrhunskoj hrani, pićima i uslugama. Naša kuhinja nudi širok izbor jela, od tradicionalnih jela domaće kuhinje do modernih jela s naglaskom na sveže namirnice. Sva jela su pripremljena od strane našeg tima vrhunskih kuvara.</p>
        <button type="button" className="custom__button">Saznaj Više</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Naša Istorija</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Ovaj restoran osnovan je 2001. godine od strane tri prijatelja. Nakon nekoliko godina poslovanja, restoran se proširio i postao popularan među lokalnim stanovništvom. Danas, nakon više od 20 godina poslovanja, i dalje pružamo kvalitetnu hranu i uslugu našim gostima.</p>
        <button type="button" className="custom__button">Saznaj Više</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
