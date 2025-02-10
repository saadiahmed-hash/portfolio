import React from 'react';
import heroPic from '../../assets/heroPic.png'; // Replace with your phone image file path
import loopHero from '../../assets/heroSvg.svg'; // Replace with your phone image file path

const HeroPicture = () => {
  return (
    <div  className='absolute bottom-38 w-full flex justify-center items-center'>
 <img
      src={loopHero}
      alt="Phone Image"
      style={{
        width: '70%', // Adjust width as needed
        display: 'block',
        marginTop: '400px',
        // Adjust margin-top as needed
      }}
    />
   
    </div>
   
  );
};

export default HeroPicture;


