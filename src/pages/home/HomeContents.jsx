import React from 'react'
import OurStory from '../../components/home/OurStory'
import Banner from '../../components/home/Banner'
import ProductShowCase from '../../components/home/ProductShowCase'
import WhyWeinber from '../../components/home/WhyWeinber'
import Testimonials from '../../components/home/Testimonials'
import FinalCTA from '../../components/home/FinalCTA'
import { motion } from "framer-motion";
import { Droplets, Leaf, Recycle, Shield } from 'lucide-react'
import { GiFruitTree } from "react-icons/gi";
import WhereItBuy from '../../components/home/WhereItBuy'
import BeforeAfterSection from '../../components/home/BeforeAfterSection'
import HeritageSection from '../../components/home/HeritageSection'
import ManufacturingHeading from '../../components/home/ManufacturingHeading'
import GlobalPresence from '../../components/home/GlobalPresence'


const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
};


function HomeContents() {
  return (
    <div>
      <Banner />

      <OurStory />

      <ManufacturingHeading />

      <HeritageSection />

      <WhereItBuy />

      <BeforeAfterSection />

      <ProductShowCase />

      <WhyWeinber />

      <GlobalPresence />

      <Testimonials />

    </div>
  )
}

export default HomeContents







