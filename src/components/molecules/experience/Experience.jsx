import React from 'react'
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = React.forwardRef((_, ref) => {
  const SKILLS_ARRAY = [
    {
      skill: 'React JS',
      proficiency: 'Experienced'
    },
    {
      skill: 'Next JS',
      proficiency: 'Intermediate'
    },
    {
      skill: 'Javascript',
      proficiency: 'Experienced'
    },
    {
      skill: 'Typescript',
      proficiency: 'Experienced'
    },
    {
      skill: 'Redux Toolkit',
      proficiency: 'Intermediate'
    },
    {
      skill: 'React / Tanstack Query',
      proficiency: 'Intermediate'
    },
    {
      skill: 'Tailwind CSS',
      proficiency: 'Intermediate'
    },
    {
      skill: 'HTML5',
      proficiency: 'Experienced'
    }
  ]

  const OTHER_SKILLS_ARRAY = [
    {
      skill: 'Data Structures',
      proficiency: 'Intermediate'
    },
    {
      skill: 'Algorithms',
      proficiency: 'Intermediate'
    },
    {
      skill: 'Jest',
      proficiency: 'Intermediate'
    },
    {
      skill: 'React Testing Library',
      proficiency: 'Intermediate'
    },
    {
      skill: 'Webpack',
      proficiency: 'Intermediate'
    },
    {
      skill: 'Cypress JS',
      proficiency: 'Beginner'
    },
    {
      skill: 'Node JS',
      proficiency: 'Intermediate'
    },
    {
      skill: 'Git',
      proficiency: 'Experienced'
    } 
  ]
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