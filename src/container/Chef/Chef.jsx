import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">Ono u šta verujemo</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Mi u našem restoranu verujemo u stvaranje nezaboravnog iskustva za naše goste, koje se sastoji ne samo od ukusne hrane, već i od kvalitetne usluge i ugodne atmosfere. </p>
        </div>
        <p className="p__opensans"> Verujemo u korišćenje svežih, lokalno uzgojenih sastojaka kako bi osigurali najbolji kvalitet hrane za naše goste. </p>
      </div>

      <div className="app__chef-sign">
        <p>Dimitrije Petrović</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;