//--------------------------------------------------------------------------------------------------
//# Imports

import React from 'react'

import './break_whoweare.css'

import who_we_are_image from '../../image/who-we-are.png'







//--------------------------------------------------------------------------------------------------
//# Variables











//AppStart
const Break_WhoWeAre = () => {

//--------------------------------------------------------------------------------------------------
//# Functions

  function mouseOver(event) {
    let element = document.getElementById(event.target.id);
    element.style.transform = 'scale(1.06)';
  }

  function mouseLeave(event) {
    let element = document.getElementById(event.target.id);
    element.style.transform = 'scale(1.0)';
  }









//--------------------------------------------------------------------------------------------------
//# HTML

  return (
    <div className='break_whoweare'>
      <div>
        <div className='break_whoWeAreTitleContainer'>
          <img data-aos="zoom-out-up" src={who_we_are_image} alt='' className='break_WhoWeAreImage' id='break_WhoWeAreImage'/>
        </div>
      </div>
    </div>
  )
}

export default Break_WhoWeAre