import React from 'react';

import {  MenuItem, SubHeading } from '../../../MenuDrinks';
import { data, images  } from '../../../../data/'
import './SpecialMenu.css';
import Image from 'next/image';

const SpecialMenuKurze = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    
    <div className='flex fex-col items-center justify-center'>
    <Image height="2000" width="200" className='' alt="LogoAlt" src="/LogoAlt.png" />
    </div>
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Kurze &Liköre</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_likoere  flex__center">
        <p className="app__specialMenu-menu_heading">Liköre</p>
        <div className="app__specialMenu_menu_items">
          {data.likoere.map((likoere, index) => (
            <MenuItem key={likoere.title + index} title={likoere.title} price={likoere.price} tags={likoere.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.weine} width="200" height="200" alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_kurze  flex__center">
        <p className="app__specialMenu-menu_heading">Kurze</p>
        <div className="app__specialMenu_menu_items">
          {data.kurze.map((kurze, index) => (
            <MenuItem key={kurze.title + index} title={kurze.title} price={kurze.price} tags={kurze.tags} />
          ))}
        </div>
      </div>
    </div>

    {/*<div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
          </div>*/}
  </div>
);

export default SpecialMenuKurze;