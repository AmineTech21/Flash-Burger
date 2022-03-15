import React from 'react';
import { GiHamburger } from 'react-icons/gi';

import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem' }} >
    <p className='p__cormorant'>{title}</p>
    {/* <img src={images.hamburger} alt="spoon" className='spoon__img'></img> */}
    <GiHamburger className='spoon__img' />
  </div>
);

export default SubHeading;
