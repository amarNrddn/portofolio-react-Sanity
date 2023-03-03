import React, { useState, useEffect } from 'react'
import './about.scss'
import { motion } from 'framer-motion'
// import { AppWrap } from '../../wrapper'
import { AppWrap} from '../../wrapper';
import { images } from '../../constants'

// import image
const abouts = [
  {title: 'Web Developer', description: 'Saya seorang Web Developer', img: images.about01 },
  {title: 'Frontend Developer', description: 'Saya seorang Fronend Developer', img: images.about02},
  {title: 'MEREN stack', description: 'Sedang belajar MEREN', img: images.about03},
  {title: 'Consum API', description: 'Mengetahiu tentang API', img: images.about04},
]

const About = () => {


  return (
    <>
      <h2 className='head-text'>
        Saya tahu bahwa
        <span> Desain yang baik </span>
        <br></br>
        berarti
        <span> Bisnis yang baik</span>
      </h2>

      <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type:'tween'}}
              className='about__profile-item'
              key={about.title + index}
            >
              <img src={about.img} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}> {about.description}</p>
            </motion.div>
          ))}
      </div>
    </>
  )
}

// export default AppWrap (About,'about')

export default AppWrap(About,'About')