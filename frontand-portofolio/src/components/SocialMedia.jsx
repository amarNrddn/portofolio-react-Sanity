import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/amarNrddn' target='_blank'>
                    <AiFillGithub />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/amar-palevi-592282257/' target='_blank'>
                    <AiFillLinkedin />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/amarrnrdn/?hl=id' target='_blank' >
                    <GrInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia