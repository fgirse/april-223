import React from 'react';

import {  MenuItem, SubHeading } from '../../../MenuDrinks';
import { data, images  } from '../../../../data/'
import './SpecialMenu.css';
import Image from 'next/image';

const SpecialMenuSnacks = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    
    <div className='flex fex-col items-center justify-center'>
    <Image height="2000" width="200" className='' alt="LogoAlt" src="/LogoAlt.png" />
    </div>
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Snacks</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_snacks  flex__center">
        <p className="app__specialMenu-menu_heading">Flammkuchen</p>
        <div className="app__specialMenu_menu_items">
          {data.snacks.map((snacks, index) => (
            <MenuItem key={snacks.title + index} title={snacks.title} price={snacks.price} tags={snacks.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.snacks} width="200" height="200" alt="menu__img" />
      </div>

  </div>
  </div>
);

export default SpecialMenuSnacks;