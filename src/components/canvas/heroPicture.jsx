import React from 'react';
import heroPic from '../../assets/heroPic.png'; // Replace with your phone image file path
import loopHero from '../../assets/heroSvg.svg'; // Replace with your phone image file path

const HeroPicture = () => {
  return (
    <div  className='absolute xs:bottom-10 bottom-38 w-full flex justify-center items-center'>
 <img
      src={loopHero}
      alt="Phone Image"
      style={{
        width: '60%', // Adjust width as needed
        display: 'block',
        margin: 'auto',
        marginTop: '60px', // Adjust margin-top as needed
      }}
    />
   
    </div>
   
  );
};

export default HeroPicture;


