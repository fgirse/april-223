import React from 'react';
import {  MenuItem, SubHeading } from '../../../MenuDrinks';
import { data, images  } from '../../../../data/'
import './SpecialMenu.css';
import Image from 'next/image';

const SpecialMenuSoftDrinks = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    
    <div className='flex fex-col items-center justify-center'>
    <Image height="2000" width="200" className='' alt="LogoAlt" src="/LogoAlt.png" />
    </div>
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Soft Drinks</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_softdrinks  flex__center">
        <p className="app__specialMenu-menu_heading">Limonaden</p>
        <div className="app__specialMenu_menu_items">
          {data.softDrinks.map((softDrinks, index) => (
            <MenuItem key={softDrinks.title + index} title={softDrinks.title} price={softDrinks.price} tags={softDrinks.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.weine} width="200" height="200" alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_warmgetränke  flex__center">
        <p className="app__specialMenu-menu_heading">Cafe und Tee</p>
        <div className="app__specialMenu_menu_items">
          {data.warmgetränke.map((warmgetränke, index) => (
            <MenuItem key={warmgetränke.title + index} title={warmgetränke.title} price={warmgetränke.price} tags={warmgetränke.tags} />
          ))}
        </div>
      </div>
    </div>

    {/*<div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
          </div>*/}
  </div>
);

export default SpecialMenuSoftDrinks;

