import React from 'react';

import {  MenuItem, SubHeading } from '../../../MenuDrinks';
import { data, images  } from '../../../../data/'
import './SpecialMenu.css';
import Image from 'next/image';

const SpecialMenuWein = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    
    <div className='flex fex-col items-center justify-center'>
    <Image height="2000" width="200" className='' alt="LogoAlt" src="/LogoAlt.png" />
    </div>
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Weine</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_weineWeiss  flex__center">
        <p className="app__specialMenu-menu_heading">Weine weiss</p>
        <div className="app__specialMenu_menu_items">
          {data.weineWeiss.map((weineWeiss, index) => (
            <MenuItem key={weineWeiss.title + index} title={weineWeiss.title} price={weineWeiss.price} tags={weineWeiss.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.weine} width="200" height="200" alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_weineRot  flex__center">
        <p className="app__specialMenu-menu_heading">Weine Rot</p>
        <div className="app__specialMenu_menu_items">
          {data.weineRot.map((weineRot, index) => (
            <MenuItem key={weineRot.title + index} title={weineRot.title} price={weineRot.price} tags={weineRot.tags} />
          ))}
        </div>
      </div>
    </div>

    {/*<div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
          </div>*/}
  </div>
);

export default SpecialMenuWein;