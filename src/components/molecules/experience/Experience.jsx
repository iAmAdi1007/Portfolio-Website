import React from 'react'
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import data from '../../../data.json';

const Experience = React.forwardRef((_, ref) => {
  const { skills: SKILLS_ARRAY, otherSkills: OTHER_SKILLS_ARRAY } = data;
  return (
    <section id="experience" ref={ref}>
      <h5>What skills I have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {SKILLS_ARRAY.map((skill, idx) =>
              <article className='experience__details' key={idx}>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className='text-light'>{skill.proficiency}</small>
                </div>
              </article>)}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Some Other Skills and Technologies</h3>
          <div className="experience__content">
            {OTHER_SKILLS_ARRAY.map((skill, index) => (
              <article className='experience__details' key={index}>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className='text-light'>{skill.proficiency}</small>
                </div>
              </article>)
            )}
          </div>
        </div>
      </div>
    </section>
  )
});

export default Experience