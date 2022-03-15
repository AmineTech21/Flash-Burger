import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import { GiHamburger } from 'react-icons/gi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">9221 Rue de Grosbois, Montréal, QC H1K 4N6, Canada</p>
        <p className="p__opensans">+1 (438) 380-3738</p>
        <p className="p__opensans" style={{ textTransform: "lowercase" }}>flashburgermtl@gmail.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Vien manger nos burgers tu verras tu ne pourras plus t'en passer&quot;</p>
        <GiHamburger style={{ marginTop: 15 }} className='spoon__img' />
        <div className="app__footer-links_icons">
          <a href='https://web.facebook.com/Flash-Burger-107370511815534/'  target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
          <a href='mailto:flashburgermtl@gmail.com' target="_blank" rel="noopener noreferrer"><FiMail /></a>
          <a href='https://z-p3.www.instagram.com/flashburgermtl/' target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
          
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Heures D'ouvertures</h1>
        <p className="p__opensans">Mardi-Dimanche :</p>
        <p className="p__opensans">17:00 pm - 01:00 am</p>
        <p className="p__opensans">lundi : fermé</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright © 2021 Flash Burger - All Rights Reserved. Developed by <a href='https://aminewebsite.com/' style={{ color: '#ABABA0' }} target="_blank" rel="noopener noreferrer">AmineTech</a> </p>
    </div>

  </div>
);

export default Footer;