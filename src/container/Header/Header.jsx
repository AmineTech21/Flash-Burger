// import React from 'react';

// import { images } from '../../constants';

// import './Header.css';

// const Header = () => (
//   <div className='app__header '>

//   <div className="app__wrapper section__padding" id="home">
//     <div className="app__wrapper_info">
//       {/* <SubHeading title="Chase the new flavour" />
//       <h1 className="app__header-h1">The Key To Find Dining</h1>
//       <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p> */}
//     </div>

//     <div className="app__wrapper_img">
//       {/* <img src={images.welcome} alt="header img" /> */}
//     <button type='button' className='custom__button ordering_button'>Commander</button>
//     </div> 
//   </div>
//   </div>
// );

// export default Header;

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Offrez-vous un petit plaisir" />
      <h1 className="app__header-h1">Flash Burger</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Vous cherchez un restaurant famillial, accueilant et avec un excellent rapport qualité/prix ? alors vous êtes au bon endroît car nous sommes fières de vous servir les meilleurs burgers de Montréal. </p>
      <button type="button" className="custom__button order__button"><a href="https://www.ubereats.com/ca-fr/store/flash-burger/sdjYecWYXaOSZ_XokDh1fg?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer">Commander</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.hamburger} alt="header_img" />
    </div>
  </div>
);

export default Header;
