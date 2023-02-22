import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Prijavi se i budi u toku</h1>
      <p className="p__opensans">Ne propusti najnovije ponude!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Unesite vašu email adresu" />
      <button type="button" className="custom__button">Prijava</button>
    </div>
  </div>
);

export default Newsletter;