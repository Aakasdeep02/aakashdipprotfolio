import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import Heroimg3 from '../components/Heroimg3'
import Skill from '../components/Skill'

const about = () => {
  return (
    <div>
      <Navbar />
      <Heroimg3 />
      <AboutContent />
      <Skill />                                          
      <Footer />
    </div>
  )
}

export default about