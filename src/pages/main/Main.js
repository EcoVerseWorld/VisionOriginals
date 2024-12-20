import React from 'react'

import Contact from '../../components/contact/Contact'
import Break_WhoWeAre from '../../components/break_whoweare/Break_WhoWeAre'
import About from '../../components/about/About'
import Break_Team from '../../components/break_team/Break_Team'
import Team from '../../components/team/Team'


//import Roadmap from '../../components/roadmap/Roadmap'
//import Team from '../../components/team/Team'
//import FAQ from '../../components/faq/FAQ'


import Banner from '../../components/banner/Banner'
//import PageDescription from '../../components/pagedescription/PageDescription'
//import GetStarted from '../../components/getstarted/GetStarted'
//import EvolutionDescription from '../../components/evolutiondescription/EvolutionDescription'

import './main.css'

const Main = () => {
  return (
    <div className='main'>
      <Banner />
      <Contact />
      <Break_WhoWeAre />
      <About />
      <Break_Team />
      <Team />
      {/* <Animation /> */}
    </div>
  )
}

export default Main
