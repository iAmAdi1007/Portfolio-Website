import React, { useRef } from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToView = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 300)
  }

  const scrollTo = (value = "HOME") => {
    let selectedRef;
    if (value === 'HOME') {
      selectedRef = headerRef;
    } else if (value === "ABOUT") {
      selectedRef = aboutRef;
    } else if (value === "EXPERIENCE") {
      selectedRef = expRef;
    } else if (value === "CONTACT") {
      selectedRef = contactRef;
    } else if(value === "PORTFOLIO"){
      selectedRef = portfolioRef;
    } else {
      selectedRef = headerRef;
    }
    scrollToView(selectedRef);
  }
  return (
    <>
      <Header ref={headerRef} />
      <Nav scrollToComponent={scrollTo} />
      <About ref={aboutRef} />
      <Experience ref={expRef} />
      <Portfolio ref={portfolioRef}/>
      <Contact ref={contactRef} />
      <Footer />
    </>
  )
}

export default App