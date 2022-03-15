import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div style={{ background:"black" }} className=" app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Venez nous voir</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">9221 Rue de Grosbois, Montréal, QC H1K 4N6, Canada</p>
        <p className="p__opensans" style={{ textTransform: "lowercase" }}>flashburgermtl@gmail.com</p>
        <p className="p__cormorant" style={{ color: '#EEB620', margin: '2rem 0' }}>Heures D'ouvertures</p>
        <p className="p__opensans">Mardi - Dimanche : 17:00 pm - 01:00 am</p>
        <p className="p__opensans">Lundi : Fermé</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}> <a href="https://www.google.com/maps/place/9221+Rue+de+Grosbois,+Montréal,+QC+H1K+4N6,+Canada/@45.610318,-73.5341497,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91de6591055df:0x6caa926842071468!8m2!3d45.610318!4d-73.531961" target="_blank" rel="noopener noreferrer">Visitez-nous</a> </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.hamburger2} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;