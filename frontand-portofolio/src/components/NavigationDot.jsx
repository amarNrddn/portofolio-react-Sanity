import React from 'react'
import '../app.scss'

const NavigationDot = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['Home', 'About', 'Work', 'Skills'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : { }}
                />
            ))}
        </div>
    )
}

export default NavigationDot