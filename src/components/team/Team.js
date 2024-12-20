//--------------------------------------------------------------------------------------------------
//# Imports

import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import team_image_1 from '../../image/bio-oscar.png'
import team_image_2 from '../../image/bio-teegs.png'
import team_image_3 from '../../image/bio-evan.png'


import './team.css'








//--------------------------------------------------------------------------------------------------
//# Variables

const delay_gap = 400;
let mobile = window.innerWidth <= 600;








//AppStart
const Team = () => {

//--------------------------------------------------------------------------------------------------
//# Functions

  const [contentLoaded, setContentLoaded] = useState(false);

  
//// This section and conditional HTML seems to fix the issue where animations wouldn't play, and seemed 
//// to have already played and loaded before the user scrolled to them.
  useEffect(() => {
    const fetchData = async () => {
      // Simulate async data fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setContentLoaded(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (contentLoaded) {
      Aos.refresh(); // Refresh AOS after content is loaded
    }
  }, [contentLoaded]);
////

  // Reset AOS timings after animation finishes so that mouseover animations are responsive
  useEffect(() => {
    Aos.init({ duration: 2000 });
    setTimeout(() => {
      const buttons = document.querySelectorAll('.teamMemberSocialsImage');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          button.style.transform = 'scale(1.25)';
          button.style.transition = 'transform 0.8s ease-in-out';
        });
        button.addEventListener('mousedown', () => {
          button.style.transform = 'scale(1.4)';
          button.style.transition = 'transform 0.05s ease-in-out';
        });
        button.addEventListener('mouseleave', () => {
          button.style.transform = 'scale(1.0)';
          button.style.transition = 'transform 0.8s ease-in-out';
        });
      });
      const social_buttons = document.querySelectorAll('.teamMemberSignupButton');
      social_buttons.forEach(social_button => {
        social_button.addEventListener('mouseenter', () => {
          social_button.style.transform = 'scale(1.10)';
          social_button.style.transition = 'transform 0.8s ease-in-out';
        });
        social_button.addEventListener('mousedown', () => {
          social_button.style.transform = 'scale(1.25)';
          social_button.style.transition = 'transform 0.05s ease-in-out';
        });
        social_button.addEventListener('mouseleave', () => {
          social_button.style.transform = 'scale(1.0)';
          social_button.style.transition = 'transform 0.8s ease-in-out';
        });
      });
      const images = document.querySelectorAll('.teamMemberImage');
      images.forEach(image => {
        image.addEventListener('mouseenter', () => {
          image.style.transform = 'scale(1.08)';
          image.style.transition = 'transform 0.8s ease-in-out';
        });    
        image.addEventListener('mouseleave', () => {
          image.style.transform = 'scale(1.0)';
          image.style.transition = 'transform 0.8s ease-in-out';
        });
      });
    }, 1000);  // Match to AOS duration
  }, []);


  function mouseOver(event) {
    let element = document.getElementById(event.target.id);
    if (event.target.id.includes("teamMemberImage") || event.target.id.includes("Button")) {
      element.style.transform = 'scale(1.1)';
    } else {
      element.style.transform = 'scale(1.2)';
    };
  };

  function mouseLeave(event) {
    let element = document.getElementById(event.target.id);
    element.style.transform = 'scale(1.0)';
  };


  function handleClick(event) {
    let element_ID = event.target.id;
    if (element_ID.includes('teamMemberSocialsImage1')) {
      if (element_ID.includes('_1')) {
        window.open("https://evanon.earth/twitter-alchmref", "_blank", "noopener noreferrer");
      } else if (element_ID.includes('_2')) {
        window.open("https://evanon.earth/instagram-alchmref", "_blank", "noopener noreferrer");
      } else if (element_ID.includes('_3')) {
        window.open("https://evanon.earth/linkedin-alchmref", "_blank", "noopener noreferrer");
      } else if (element_ID.includes('_4')) {
        window.open("https://evanon.earth/website-alchmref", "_blank", "noopener noreferrer");
      };
    } else if (element_ID.includes('teamMemberSocialsImage2')) {
      if (element_ID.includes('_1')) {
        window.open("https://evanon.earth/gregtwitter-alchmref", "_blank", "noopener noreferrer");
      } else if (element_ID.includes('_2')) {
        window.open("https://evanon.earth/greginstagram-alchmref", "_blank", "noopener noreferrer");
      } else if (element_ID.includes('_3')) {
        window.open("https://evanon.earth/greglinkedin-alchmref", "_blank", "noopener noreferrer");
      } else if (element_ID.includes('_4')) {
        window.open("https://evanon.earth/greglinkedin-alchmref", "_blank", "noopener noreferrer");
      };
    } else if (element_ID === 'teamMemberSignupButton') {
      window.open("https://evanon.earth/alchmteamsignup-siteref", "_blank", "noopener noreferrer");
    } else if (element_ID === 'teamMemberBetaButton') {
      window.open("https://evanon.earth/alchmbetasignup-siteref", "_blank", "noopener noreferrer");
    };
  };






//--------------------------------------------------------------------------------------------------
//# HTML

  return (
    <div className='team'>
      {/* This conditional HTML and an above useEffect section seems to fix the issue where animations wouldn't play, 
      and seemed to have already played and loaded before the user scrolled to them */}
      {!contentLoaded ? (
        <p>Loading...</p>
      ) : (
        <div>
        <div className='teamAllMembersContainer'>
          {/* --- Team Member #1 --- */}
          <div className='teamMemberContainer'>
            <div className='teamMemberImageContainer'>
              <img data-aos="flip-right" src={team_image_1} alt='' className='teamMemberImage' id='teamMemberImage1' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
            </div>
            {/* <div className='teamMemberTextContainer'>
              <div className='teamMemberTitleText' data-aos="zoom-out-down" data-aos-offset="-2" data-aos-delay={1 * delay_gap}>Evan Gottschalk ♈︎</div>
              <div className='teamMemberRoleText' data-aos="fade-down-right" data-aos-offset="-5" data-aos-delay={2 * delay_gap}>Co-founder, Lead Developer</div>
              <div className='teamMemberDescriptionContainer'>
                <div className='teamMemberText' data-aos="fade-down-right" data-aos-offset="-8" data-aos-delay={3 * delay_gap}>• Founder at <a className='teamLink' href='https://nofunz.one/twitter-alchmref' target="_blank" rel="noreferrer" style={{ color: "#00ff11"}}>NoFun Labs</a></div>
                <div className='teamMemberText' data-aos="fade-right" data-aos-offset="-11" data-aos-delay={4 * delay_gap}>• Blockchain Architect at <a className='teamLink' href='https://evanon.earth/mintedmoments-alchmref' target="_blank" rel="noreferrer" style={{ color: "#dc69ff"}}>EcoVerse</a></div>
                <div className='teamMemberText' data-aos="fade-right" data-aos-offset="-14" data-aos-delay={6 * delay_gap}>• Head of Web3 Engineering at <a className='teamLink' href='https://evanon.earth/aphid-alchmref' target="_blank" rel="noreferrer" style={{ color: "#00F8BE"}}>Aphid AI</a></div>
                <div className='teamMemberText' data-aos="fade-up-right" data-aos-offset="-17" data-aos-delay={7 * delay_gap}>• Competitively Sarcastic</div>
              </div>
            </div>
            <div className='teamMemberSocialsContainer'>
              <img data-aos="fade-up-right" data-aos-offset="-20" data-aos-delay={8 * delay_gap} src={twitter_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage1_1' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
              <img data-aos="fade-up" data-aos-offset="-20" data-aos-delay={9 * delay_gap} src={instagram_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage1_2' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
              <img data-aos="fade-up" data-aos-offset="-20" data-aos-delay={10 * delay_gap} src={linkedin_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage1_3' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
              <img data-aos="fade-up-left" data-aos-offset="-20" data-aos-delay={11 * delay_gap} src={website_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage1_4' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
            </div> */}
          </div>
          {/* --- Team Member #2 --- */}
          <div className='teamMemberContainer'>
            <div className='teamMemberImageContainer'>
              <img data-aos="flip-right" data-aos-delay={mobile ? 0 : 1 * delay_gap} src={team_image_2} alt='' className='teamMemberImage' id='teamMemberImage2' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
            </div>
            {/* <div className='teamMemberTextContainer'>
              <div className='teamMemberTitleText' data-aos="zoom-out-down" data-aos-offset="-2" data-aos-delay={mobile ? 1 * delay_gap : 12 * delay_gap}>Greg Castro ♋︎</div>
              <div className='teamMemberRoleText' data-aos="fade-down-right" data-aos-offset="-5" data-aos-delay={mobile ? 2 * delay_gap : 13 * delay_gap}>Co-founder, Lead Alchemist</div>
              <div className='teamMemberDescriptionContainer'>
                <div className='teamMemberText' data-aos-offset="-8" data-aos="fade-down-right" data-aos-delay={mobile ? 3 * delay_gap : 14 * delay_gap}>• Chef at <a className='teamLink' href='https://evanon.earth/loewshotelrestaurant-alchmref' target="_blank" rel="noreferrer" style={{ color: "#F1FF62"}}>Loews Regency Hotel @ NYC</a></div>
                <div className='teamMemberText' data-aos-offset="-11" data-aos="fade-right" data-aos-delay={mobile ? 4 * delay_gap : 15 * delay_gap}>• Lead Singer of <a className='teamLink' href='https://evanon.earth/restrictedairspace-alchmref' target="_blank" rel="noreferrer" style={{ color: "#F1FF62"}}>Restricted Airspace</a></div>
                <div className='teamMemberText' data-aos-offset="-14" data-aos="fade-right" data-aos-delay={mobile ? 5 * delay_gap : 16 * delay_gap}>• Biochemist at <a className='teamLink' href='https://evanon.earth/binghamton-alchmref' target="_blank" rel="noreferrer" style={{ color: "#F1FF62"}}>SUNY Binghamton</a></div>
                <div className='teamMemberText' data-aos-offset="-17" data-aos="fade-up-right" data-aos-delay={mobile ? 6 * delay_gap : 17 * delay_gap}>• Not Dead Yet</div>
              </div>
            </div>
            <div className='teamMemberSocialsContainer'>
              <img data-aos="fade-up-right" data-aos-offset="-20" data-aos-delay={mobile ? 8 * delay_gap : 19 * delay_gap} src={twitter_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage2_1' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
              <img data-aos="fade-up" data-aos-offset="-20" data-aos-delay={mobile ? 9 * delay_gap : 20 * delay_gap} src={instagram_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage2_2' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
              <img data-aos="fade-up" data-aos-offset="-20" data-aos-delay={mobile ? 10 * delay_gap : 21 * delay_gap} src={linkedin_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage2_3' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
              <img data-aos="fade-up-left" data-aos-offset="-20" data-aos-delay={mobile ? 11 * delay_gap : 22 * delay_gap} src={website_icon} alt='' className='teamMemberSocialsImage' id='teamMemberSocialsImage2_4' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
            </div> */}
          </div>
          {/* --- Team Member #3 --- */}
          <div className='teamMemberContainer'>
            <div className='teamMemberImageContainer'>
              <img data-aos="flip-right" data-aos-delay={mobile ? 0 : 2 * delay_gap} src={team_image_3} alt='' className='teamMemberImage' id='teamMemberImage3' onMouseOver={mouseOver} onMouseLeave={mouseLeave}/>
            </div>
            {/* <div className='teamMemberTextContainer'>
              <div className='teamMemberTitleText' data-aos="zoom-out-down" data-aos-offset="-2" data-aos-delay={mobile ? 1 * delay_gap : 23 * delay_gap}>[ Your Name Here ]</div>
              <div className='teamMemberRoleText' data-aos="fade-down-right" data-aos-offset="-5" data-aos-delay={mobile ? 2 * delay_gap : 24 * delay_gap}>Choose Your Role</div>
              <div className='teamMemberDescriptionContainer'>
                <div className='teamMemberText' data-aos="fade-down-right" data-aos-offset="-8" data-aos-delay={mobile ? 3 * delay_gap : 25 * delay_gap}>• Marketing Lead / Community Builder</div>
                <div className='teamMemberText' data-aos="fade-right" data-aos-offset="-11" data-aos-delay={mobile ? 4 * delay_gap : 26 * delay_gap}>• Artist / Content Creator</div>
                <div className='teamMemberText' data-aos="fade-right" data-aos-offset="-14" data-aos-delay={mobile ? 6 * delay_gap : 28 * delay_gap}>• Designer / Frontend Developer</div>
                <div className='teamMemberText' data-aos="fade-up-right" data-aos-offset="-17" data-aos-delay={mobile ? 7 * delay_gap : 29 * delay_gap}>• Web3 Engineer / AI Engineer</div>
              </div>
            </div>
            <div className='teamMemberSocialsContainer'>
              <div data-aos="fade-up-right" data-aos-offset="-20" data-aos-delay={mobile ? 7 * delay_gap : 29 * delay_gap} alt='No Astrology Knowledge Required' className='teamMemberSignupButton' id='teamMemberSignupButton' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Join the Team</div>
              <div data-aos="fade-up-left" data-aos-offset="-20" data-aos-delay={mobile ? 8 * delay_gap : 30 * delay_gap} alt='Get Early Access' className='teamMemberSignupButton' id='teamMemberBetaButton' onClick={handleClick} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Beta Signup</div>
            </div> */}
          </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default Team