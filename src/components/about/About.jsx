import React, { forwardRef } from 'react'
import './about.css';
import ME from '../../assets/about.png';
import { FiAward } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = forwardRef((_, ref) => {
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
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, illum? Delectus porro quisquam cupiditate corrupti cumque cum! Dicta facilis quo rem fuga sapiente ipsa, soluta vero temporibus, quisquam, id maiores voluptate dolor nisi neque aliquid?</p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
});

export default About