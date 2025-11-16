import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import OurWork from './OurWork'
import OurServices from './OurServices'
import CtaAction from './CtaAction'

export default function HomeMain() {
  return (
      <div>
          <HeroSection />
          <Services />
          <OurWork />
          <OurServices />
          <CtaAction/>
    </div>
  )
}
