'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import Image from 'next/image'; 
import Modale05 from "../components/Modale/Modale05";
import Modale06 from "../components/Modale/Modale06";
import Modale07 from "../components/Modale/Modale07";
import Modale08 from "../components/Modale/Modale08";
import Modale09 from "../components/Modale/Modale09";
import Modale10 from "../components/Modale/Modale10";

const Drinks = () => (
  <section id="section-drinks" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText className="text-yellow-600 headingA " title="| Drinks & Snacks" textStyles="text-center" />
      <h1 className='mt-3 text-center headingA text-yellow-600 text-4xl md:text-5xl lg:text-7xl'>Drinks & Snacks</h1>
      {/*<TitleText title={<>Drinks and Snacks</>} textStyles="text-yellow text-center" />*/}
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>


      <section className="grid-container rounded-2xl bg-slate-600/20">
          <div className='col hover:border-8 hover:border-red-600 hover:rounded-xl'>
              <figure className='grid-item'>
                <Modale05 className="modale"/>
              </figure>
          </div>
          <div className='col hover:border-8 hover:border-red-700 hover:rounded-xl'>
              <figure className='grid-item'>
                <Modale06 className="modale"/>
              </figure>
          </div>
          <div className='col hover:border-8 hover:border-red-400 hover:rounded-xl'>
              <figure className='grid-item'>
                <Modale07 className="modale"/>
              </figure>
          </div>
          <div className='col hover:border-8 hover:border-red-900 hover:rounded-xl'>
              <figure className='grid-item'>
                <Modale08 className="modale"/>
              </figure>
          </div>
          <div className='col hover:border-8 hover:border-red-700 hover:rounded-xl'>
              <figure className='grid-item'>
                <Modale09 className="modale"/>
              </figure>
          </div>
          <div className='col hover:border-8 hover:border-red-800 hover:rounded-xl'>
              <figure className='grid-item'>
                <Modale10 className="modale"/>
              </figure>
          </div>

      </section>
      
    </motion.div>
  </section>
);
export default Drinks