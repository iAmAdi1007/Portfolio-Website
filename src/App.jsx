import React, { useRef } from 'react'
import Header from './components/molecules/header/Header';
import Nav from './components/molecules/nav/Nav';
import About from './components/molecules/about/About';
import Experience from './components/molecules/experience/Experience';
import Contact from './components/molecules/contact/Contact';
import Footer from './components/molecules/footer/Footer';
import Portfolio from './components/molecules/portfolio/Portfolio';

const App = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    {
      title: "HOME",
      ref: headerRef
    },
    {
      title: "ABOUT",
      ref: aboutRef
    },
    {
      title: "EXPERIENCE",
      ref: expRef
    },
    {
      title: "CONTACT",
      ref: contactRef
    },
    {
      title: "PORTFOLIO",
      ref: portfolioRef
    }
  ]
  
  return (
    <>
      <Header ref={headerRef} />
      <Nav sectionRefs={sectionRefs} />
      <About ref={aboutRef} />
      <Experience ref={expRef} />
      <Portfolio ref={portfolioRef}/>
      <Contact ref={contactRef} />
      <Footer />
    </>
  )
}

export default App