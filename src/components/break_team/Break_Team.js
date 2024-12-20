//--------------------------------------------------------------------------------------------------
//# Imports

import React from 'react'

import './break_team.css'

import team_title_image from '../../image/team-image.png'







//--------------------------------------------------------------------------------------------------
//# Variables











//AppStart
const Break_Team = () => {

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
    <div className='break_team'>
      <div>
        <div className='break_teamTitleContainer'>
          <img data-aos="zoom-out-up" src={team_title_image} alt='' className='break_TeamImage' id='break_TeamImage'/>
        </div>
      </div>
    </div>
  )
}

export default Break_Team