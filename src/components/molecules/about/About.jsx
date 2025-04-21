import React, { forwardRef } from 'react'
import './about.css';
import ME from '../../../assets/about.png';
import { FiAward } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = forwardRef((_, ref) => {

  const CERTIFICATES_ARRAY = [
    {
      title: "FE Developer",
      link: "https://www.hackerrank.com/certificates/cf0d1f915dfc"
    },
    {
      title: "Frontend Expert",
      link: "https://certificate.algoexpert.io/FE-9d87f33d48"
    },
    {
      title: "React JS",
      link: "https://www.hackerrank.com/certificates/ba7c8d779d4d"
    },
    {
      title: "JavaScript Basics",
      link: "https://www.hackerrank.com/certificates/cd300095bd06"
    },
    {
      title: "Problem Solving",
      link: "https://www.hackerrank.com/certificates/9f04c57f4f14"
    },
    {
      title: "Product Developer",
      link: "https://www.linkedin.com/in/aditya-pratap-81063a107/overlay/1635522560742/single-media-viewer/?profileId=ACoAABr38wwBHzEUJ2Uoz43N7o16Mz7mp2-6VB8"
    }
  ]

  return (
    <section id="about" ref={ref}>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>Have 4.5+ years of Frontend Development Experience in evolving tech stacks</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Have worked for various clients across varying domains viz Apple INC, Verizon India, Deutsche Borse etc.</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Certifications</h5>
              {
                CERTIFICATES_ARRAY.map((item, index) => {
                  return (
                    <div key={index} className='certificate__container'>
                      <GoDotFill className='certificate__point'/>
                      <a href={item.link} target='_blank' rel="noreferrer">
                        <small>{item.title}</small>
                      </a>
                    </div>
                  )
                })
              }
              <h6 style={{marginTop: '1rem'}}>(Click each to see)</h6>
            </article>
          </div>

          <p>Hey There! Glad you stopped by.<br /> Now that you already have an understanding of my work/domain, I want to let you know more about what skills I have & whether I will be a good fit as a candiate you want to have work with you so do remember to explore other sections as well or let's talk..</p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
});

export default About