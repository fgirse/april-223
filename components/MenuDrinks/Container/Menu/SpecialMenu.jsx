import React from 'react';

import {  MenuItem, SubHeading } from '../../../MenuDrinks';
import { data, images  } from '../../../../data/'
import './SpecialMenu.css';
import Image from 'next/image';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    
    <div className='flex fex-col items-center justify-center'>
    <Image height="2000" width="200" className='' alt="LogoAlt" src="/LogoAlt.png" />
    </div>
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Biere</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_flaschenPost  flex__center">
        <p className="app__specialMenu-menu_heading">Fassbier</p>
        <div className="app__specialMenu_menu_items">
          {data.biereOffen.map((biereOffen, index) => (
            <MenuItem key={biereOffen.title + index} title={biereOffen.title} price={biereOffen.price} tags={biereOffen.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.astra} width="200" height="200" alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_flaschenPost  flex__center">
        <p className="app__specialMenu-menu_heading">Flaschenpost</p>
        <div className="app__specialMenu_menu_items">
          {data.flaschenPost.map((flaschenPost, index) => (
            <MenuItem key={flaschenPost.title + index} title={flaschenPost.title} price={flaschenPost.price} tags={flaschenPost.tags} />
          ))}
        </div>
      </div>
    </div>

    {/*<div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
          </div>*/}
  </div>
);

export default SpecialMenu;