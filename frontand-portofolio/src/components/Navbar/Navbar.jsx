import React, { useState } from 'react'
import './navbar.scss'
import { MdOutlineMenuOpen } from 'react-icons/md'
import { HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';

const Navbar = () => {
    const [togle, setTogle] = useState(false)

    return (
        <nav className='app__navbar'>
            <div className='app__nav-logo' >
                <h1>Amar<span>Nrddn</span></h1>
            </div>
            <ul className='app__nav-links'>
                {['Home', 'About', 'Work', 'Skills'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="app__nav-menu">
                <MdOutlineMenuOpen onClick={() => setTogle(true)} />
                {togle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setTogle(false)} />
                        <ul>
                            {['Home', 'About', 'Work',  'Skills'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setTogle(false)}>{item} </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav >
    )
}

export default Navbar