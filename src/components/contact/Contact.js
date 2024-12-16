import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import contact_image from '../../image/contact.png'
import for_artists_image from '../../image/for-artists.png'
import for_brands_image from '../../image/for-brands.png'

import './contact.css'



const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function mouseClick(event) {
    const element = document.getElementById(event.target.id);
    const element_ID = event.target.id;
    if (element_ID.includes('artist')) {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSdWEjBIFHd3iBGeU5S_za3jMsJ6ZbOjhzPLWcLbgzK1T7RfcA/viewform?usp=sf_link", "_blank", "noopener noreferrer");
    } else if (element_ID.includes('brand')) {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSf1ChgD1NhExHjpayvwcYv33x3I82gQm-gyrUZZ8kZVLMCVsA/viewform?usp=sf_link", "_blank", "noopener noreferrer");
    };
  };

  // function mouseOver(event) {
  //   let element = document.getElementById(event.target.id);
  //   element.style.transform = 'scale(1.20)';
  // }
  
  // function mouseLeave(event) {
  //   let element = document.getElementById(event.target.id);
  //   element.style.transform = 'scale(1.0)';
  // }

  return (
    <div className='contact'>
      <div className='contactImageContainer'>
        {/* <img data-aos="fade-up-right" data-aos-delay="1000" data-aos-offset="-1000" src={contact_image} alt='' className='contactImage contactLink' id='contactImage' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
        <img data-aos="fade-up" data-aos-delay="1200" data-aos-offset="-1000" src={for_artists_image} alt='' className='contactImage artistLink' id='artistsImage' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
        <img data-aos="fade-up-left" data-aos-delay="1400" data-aos-offset="-1000" src={for_brands_image} alt='' className='contactImage brandLink' id='brandImage' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/> */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWEjBIFHd3iBGeU5S_za3jMsJ6ZbOjhzPLWcLbgzK1T7RfcA/viewform?usp=sf_link" target="_blank" rel="noreferrer" className='contactLinkContainer artistHREFbox'>
          <img data-aos="fade-up-right" data-aos-delay="1000" data-aos-offset="-1000" src={for_artists_image} alt='' className='contactImage artistLink' id='artistsImage' onClick={mouseClick}/>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1ChgD1NhExHjpayvwcYv33x3I82gQm-gyrUZZ8kZVLMCVsA/viewform?usp=sf_link" target="_blank" rel="noreferrer" className='contactLinkContainer brandHREFbox'>
          <img data-aos="fade-up" data-aos-delay="1200" data-aos-offset="-1000" src={for_brands_image} alt='' className='contactImage brandLink' id='brandImage' onClick={mouseClick}/>
        </a>
        <a href="mailto:oscar@visionoriginals.com?subject=Tell%20Me%20More" className='contactLinkContainer contactHREFbox'>
          <img data-aos="fade-up-left" data-aos-delay="1400" data-aos-offset="-1000" src={contact_image} alt='' className='contactImage contactLink' id='contactImage' onClick={mouseClick}/>
        </a>
      </div>
    </div>
  )
}

export default Contact
