import React from 'react'
import './header.scss'

import {AppWrap} from '../../wrapper'
import { motion } from 'framer-motion'
import { images } from '../../constants'

const secaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    Transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        duration={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🤘</span>
            <div className="" style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello saya</p>
              <h1 className='head-text'>Amar<span>Nrddn</span></h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text'>Frontand Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      {/* profile motion */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        duration={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile}  />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          duration={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          className='overlay_circle'
        /> 
      </motion.div>

      <motion.div
        variants={secaleVariants}
        whileInView={secaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.css, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} />
          </div>
        ))}
      </motion.div>
    </div >
  )
}

export default AppWrap (Header, 'Home')