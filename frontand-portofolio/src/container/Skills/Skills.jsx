import React, { useState, useEffect } from 'react'
import './skills.scss'

import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { client, urlFor } from '../../client'

const Skills = () => {
  const [experience, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query)
      .then((data) => {
        setExperiences(data)
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
      })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experiens</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={index}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} />
              </div>
              <p className='p-text'> {skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {experience?.map((experience, index) => (
            <motion.div
              className='app__skills-exp-item'
              key={index}
            >
              <div className="app__sklis-exp-year">
                <p className='bold-text'>{experience.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {experience?.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={index}
                    >
                      <h4 className='bold-text'> {work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                      <p className='p-text'> {work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap (Skills, 'Skills')