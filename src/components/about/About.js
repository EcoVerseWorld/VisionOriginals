import React from 'react'

import about_image from '../../image/logo-black-outline.png'
import about_text_image from '../../image/about-text-image.png'

import './about.css'







const About = () => {

  function mouseOver(event) {
    let element = document.getElementById(event.target.id);
    element.style.transform = 'scale(1.10)';
  }
  
  function mouseLeave(event) {
    let element = document.getElementById(event.target.id);
    element.style.transform = 'scale(1.0)';
  }

  return (
    <div className='about'>
      <div className='aboutLeftContainer'>
        <div className='aboutImageContainer'>
          <img data-aos="flip-right" src={about_image} alt='' className='aboutImage' id='aboutImage' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
        </div>
      </div>
      <div className='aboutRightContainer'>
        <div className='aboutImageContainer'>
          <img data-aos="flip-left" src={about_text_image} alt='' className='aboutTextImage' id='AboutTextImage' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
        </div>
      </div>
    </div>
  )
}

export default About
