import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import SolSection from '../components/SolSection'
import NewsSection from '../components/NewsSection'
import FooterSection from '../components/FooterSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection />
    <SolSection />
    <NewsSection />
    <FooterSection />
    </>
  )
}

export default Home