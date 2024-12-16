import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import home_banner from '../../image/banner-home.png'
import logo_title from '../../image/logo-title.png'

import './banner.css'

const Banner = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='bannerContainer'>
      <div className='banner bannerImageContainer'>
        <img data-aos="zoom-out-up" src={home_banner} alt='' className='banner bannerImage' />
        <img data-aos="zoom-out-up" data-aos-delay="500" data-aos-offset="-1000" src={logo_title} alt='' className='bannerTitle' />
      </div>
    </div>
  )
}

export default Banner