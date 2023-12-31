import { Home } from '@mui/icons-material'
import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({
                            color: isActive ? 'greenyellow' : 'white'
                        })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({
                            color: isActive ? 'greenyellow' : 'white'
                        })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({
                            color: isActive ? 'greenyellow' : 'white'
                        })}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<Home />} />
                    <Route exact path="/contact" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default NavBar
