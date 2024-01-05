
import { BrowserRouter } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const App = () => {

  const [hoveredIcon, setHoveredIcon] = useState(null); // Track hovered icon

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName); // Set the hovered icon
  };

  const handleIconLeave = () => {
    setHoveredIcon(null); // Reset when the hover ends
  }


  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);


  return (

    <BrowserRouter>

    <div className='relative z-0 bg-primary'> 
    <div className='relative'>
  
    {!isMobile && <StarsCanvas/>}

      <Navbar />
        <Hero />
    </div>
     <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
  
        <div className='relative z-0'>
          <Contact />
      
          <footer className="text-center py-4">
          
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <span style={{ marginRight: '10px' }}> {/* Add space between phone number and icons */}
              <a href='https://www.facebook.com/profile.php?id=100028844775810&mibextid=mna8qTP8xvtPE1tK'>
              <FaFacebook
                size={25}
                color={hoveredIcon === 'facebook' ? '#1363DF' : '#fff'}
                onMouseEnter={() => handleIconHover('facebook')}
                onMouseLeave={handleIconLeave}
              />
              </a>
            </span>
            <span style={{ marginRight: '10px' }}> {/* Add space between icons */}
              <FaGithub
                size={25}
                color={hoveredIcon === 'github' ? '#1363DF' : '#fff'}
                onMouseEnter={() => handleIconHover('github')}
                onMouseLeave={handleIconLeave}
              />
            </span>
            <span style={{ marginRight: '10px' }}> {/* Add space between icons */}
            
              <a href='https://www.linkedin.com/in/saadi-ahmed-898281232'>
              <FaLinkedin
                size={25}
                color={hoveredIcon === 'linkedin' ? '#1363DF' : '#fff'}
                onMouseEnter={() => handleIconHover('linkedin')}
                onMouseLeave={handleIconLeave}
              />
            </a>
            </span>
            <span style={{ marginRight: '10px' }}> {/* Add space between icons */}
              <a href='https://www.instagram.com/saadi_._ahmed?igsh=OGQ5ZDc2ODk2ZA=='>
              <FaInstagram
                size={25}
                color={hoveredIcon === 'instagram' ? '#1363DF' : '#fff'}
                onMouseEnter={() => handleIconHover('instagram')}
                onMouseLeave={handleIconLeave}
              />

              </a>
            </span>
          </div>
          <p style={{ marginTop: '10px' , fontfamily: 'Poppins, sans-serif' }} >Phone Number: 05-41-53-30-15 </p>

          <p style={{ marginTop: '10px', fontfamily: 'Poppins, sans-serif' }}>SAADI Ahmed © 2024</p>
        </footer>

        {!isMobile && <StarsCanvas />}
          
        </div>

   
    </div>
    </BrowserRouter>

      )
}

export default App
