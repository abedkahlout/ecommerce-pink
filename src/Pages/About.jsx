import React from 'react'
import HeroAbout from '../Components/About/HeroAbout'
import OurTeams from '../Components/About/OurTeams'
import WhyUs from '../Components/About/WhyUs'
import ContainerL from '../Components/Layout/ContainerL'

function About() {
  return (
    <ContainerL>
        <HeroAbout />
        <WhyUs />
        <OurTeams />
    </ContainerL>
  )
}

export default About