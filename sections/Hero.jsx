'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Image from 'next/image';

const Hero = () => (
  <section className={`${styles.yPaddings} mx-auto bg-hero relative top-[2vh] h-screen bg-no-repeat pl- lg:h-screen lg:bg-no-repeat lg:bg-right`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
   <div className='mx-auto mt-[1vh] bg-gray-900/30 w-2/3 h-1/3  flex flex-col items-center justify-between'>
      <div className='flex flex-col items-center w-2/3 h-40'>  
      <Image src="/LogoNeu.png"  width={800} height={500} alt="LogoNeu" className="object-contain w-[66vw] h-[33vh] md:mt-[0vh] md:w-[55vw] md:h-[36vh] lg:hidden "/>
      </div>
      <div className="flex justify-center items-center flex-col relative z-10 ">
        <motion.h1
          variants={textVariant(1.1)}
          className="lg:transition lg:-translate-y-[30vh] mb-[3vh] headingE text-yellow-50 text-[40vw] md:mt-[6vh] sd:text-8xl md:text-[13.33rem] lg:-mt-[5vh] lg:mb-[2vh]  lg:text-[19rem] 2xl:text-[25rem]"
        >
          die
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="-mt-[3vh] flex flex-row justify-center items-center"
        >
          <motion.h1 className="-mt-[12vh] headingA lg:-mt-[18vh] text-[2.9rem] sd:text-[5.66rem] md:text-[6rem] lg:text-[11rem] text-red-700 2xl:text-[12rem]">
            kiezkneipe
          </motion.h1>

        </motion.div>
      </div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
