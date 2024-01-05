import React from 'react';
import contactSvg from '../../assets/contactSvg.svg'; // Adjust the path

const ContactPic = () => {
  return (
    <div className='absolute xs:top-0 bottom-38 w-full flex justify-center items-center'>

    
    <img
      src={contactSvg}
      alt="Contact Picture"
      width="85%"
      style={{ marginTop: '-50px' }}
    />
    </div>
  );
};

export default ContactPic;
