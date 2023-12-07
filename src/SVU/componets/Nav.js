import React, { useState } from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'
import down from '../images/arrow-down-sign-to-navigate.png'
import './Nav.css'
function Nav() {
    const [click, setClick] = useState(false);
    console.log(click);
    return (
        <>
            <div className='main'>
                <div className='Nav-bar'>
                    <div className='left'>
                        <div className='Image'>
                            <img src={logo} alt='logo'></img>
                        </div>
                        <div className='College'>
                            <p>Sri Venkateswara University</p>
                            <p>Departments of College of Engineering</p>
                        </div>
                        <div className='icon'>
                            {click ? <img src={down} alt='logo' onClick={() => setClick(!click)}></img> :
                                <img src={menu} alt='logo' onClick={() => setClick(!click)}></img>}
                        </div>
                    </div>
                    <div className='right'>
                        <div className='Links'>
                            <ul>
                                <li><a href='https://www.google.co.in/'>Home</a></li>
                                <li><a href='https://www.google.co.in/'>Events</a></li>
                                <li><a href='https://www.google.co.in/'>Form</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div>
                    <div className={click ? "show-links" : "hide-links"}>
                        <ul>
                            <li><a href='https://www.google.co.in/'>Home</a></li>
                            <li><a href='https://www.google.co.in/'>Events</a></li>
                            <li><a href='https://www.google.co.in/'>Form</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
