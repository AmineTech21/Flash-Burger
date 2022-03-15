import React from 'react';
import { GiFrenchFries, GiHamburger } from 'react-icons/gi';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.logo} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Nos Valeurs</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">Nous pensons qu'un restaurant est une famille là où les gens se réunissent et créent des souvenirs et quoi de mieux que de créer ses souvenirs autours d'un bon burger préparé avec passion dans un restaurant famillial.</p>
        <GiHamburger className='spoon__img burger__img' />
        {/* <button type="button" className="custom__button">Voir plus</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nous sommes</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">Nous sommes un restaurant fammilial et nous ne servont que de la viande hallal qui a été égorgé à 100% selon les rites de l'islam. Nous sommes spécialisés dans les burgers c'est simple il n'y a pas meilleur que nous !</p>
        <GiHamburger className='spoon__img burger__img' />
        {/* <button type="button" className="custom__button">Voir Plus</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;