import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import HeroPicture from "./canvas/heroPicture"

const Hero = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#1363DF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#1363DF] '>Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Backend and mobile developer,
            Artificial Intelligence enthusiast,  <br className='sm:block hidden' />
            freelancer,and i like to share some content about cs on instagram. 
          </p>
        </div>
      </div>
   

     
      {isMobile ? (
 <HeroPicture/>
        // Show the phone image for mobile devices
      ) : (
        <ComputersCanvas /> // Show ComputersCanvas for non-mobile devices
      )}
    
      
      {/* <div className='absolute xs:bottom-10 bottom-38 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}



    </section>
    
  );
};

export default Hero;
