import React from 'react'
import heroImage from '../images/SL_043021_42650_12 1.png'

import arrow from '../images/right-arrow.png'
import './Header.css'

function Header() {
    return (
        <>
            <div className='header'>
                <div className='mainImage'>
                    <img src={heroImage} alt='heroImage'></img>
                </div>
                <div className='Content'>
                    <div className='title'>
                        <p>Cynosure</p>
                    </div>
                    <p className='year'>2K23</p>
                    <div className='Matter'>
                        <p>Cynosure of 2 DAYS, is a multifaceted technical fest organized to bring out the real talent. This takes you into a whole new world combined with excited events,
                            flawless creative designs tantalizing quizzes and feet tapping brain teasers.</p>
                    </div>
                    <div className='date'>
                        <p>Let’s Meet on Nov xx</p>
                    </div>
                    <div className='register'>
                        <button><p>Get Registered </p><img src={arrow} alt='arrow'></img> </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
