import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Pronadjite Nas</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Dragoslava Jovanovića 2, Beograd</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Radno Vreme</p>
        <p className="p__opensans">Pon - Pet: 10:00  - 02:00 </p>
        <p className="p__opensans">Sub - Ned: 10:00  - 03:00 </p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Posetite Nas</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;