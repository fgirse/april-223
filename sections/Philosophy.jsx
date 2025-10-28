'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Features from'../components/Feature';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const Philosophy = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings} `} id="section-philosophy">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Die Philosophie" textStyles="text-center" />
        <Features/>
      </motion.div>
    </section>
  );
};

export default Philosophy;
