import React from 'react';

import {  MenuItem, SubHeading } from '../../../MenuDrinks';
import { data, images  } from '../../../../data/'
import './SpecialMenu.css';
import Image from 'next/image';

const SpecialMenuLongDrink = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    
    <div className='flex fex-col items-center justify-center'>
    <Image height="2000" width="200" className='' alt="LogoAlt" src="/LogoAlt.png" />
    </div>
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Weine</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_longDrinks  flex__center">
        <p className="app__specialMenu-menu_heading">Longdrinks</p>
        <div className="app__specialMenu_menu_items">
          {data.longDrinks.map((longDrinks, index) => (
            <MenuItem key={longDrinks.title + index} title={longDrinks.title} price={longDrinks.price} tags={longDrinks.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.weine} width="200" height="200" alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}
        </div>
      </div>
    </div>

    {/*<div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
          </div>*/}
  </div>
);

export default SpecialMenuLongDrink;