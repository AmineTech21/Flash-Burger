import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your palette" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_drinks flex__center'>
        <p className='app__specialMenu-menu_heading'>Drinks</p>
        <div className='app__specialMenu-menu_items'>
          {data.drinks.map((drinks, index) => (
             <MenuItem key={drinks.title + index} title={drinks.title} price={drinks.price} tags={drinks.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt="menu img" />
      </div>

      <div className='app__specialMenu-menu_smoothies flex__center'>
        <p className='app__specialMenu-menu_heading'>Smoothies</p>
        <div className='app__specialMenu-menu_items'>
          {data.smoothies.map((smoothies, index) => (
            <MenuItem key={smoothies.title + index} title={smoothies.title} price={smoothies.price} tags={smoothies.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
            <button type='button' className='custom__button'>View more</button>
    </div>
  </div>
);

export default SpecialMenu;