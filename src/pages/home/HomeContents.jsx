import React from 'react'
import OurStory from '../../components/home/OurStory'
import Banner from '../../components/home/Banner'
import ProductShowCase from '../../components/home/ProductShowCase'
import WhyWeinber from '../../components/home/WhyWeinber'
import Testimonials from '../../components/home/Testimonials'
import FinalCTA from '../../components/home/FinalCTA'

function HomeContents() {
  return (
    <div>
      <Banner />
      <ProductShowCase />
      <OurStory />
      <WhyWeinber />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}

export default HomeContents







