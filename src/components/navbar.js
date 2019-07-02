import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/home">HOME</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar