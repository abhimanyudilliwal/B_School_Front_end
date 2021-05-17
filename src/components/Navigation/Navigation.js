import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <div className='bo'>
                    <nav>
        <div id="logo">Blind School</div>

        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
                <li><Link to='/' href="#">Home</Link></li>
                <li>
                 
                    <label for="drop-1" class="toggle">Services</label>
                    <a href="#">Services</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li><Link to='/user' href="#">User</Link></li>
                        <li><Link to='/teacher' href="#">Teacher</Link></li>
                        <li><Link to='/services' href="#">Service Provider</Link></li>
                    </ul> 
                </li>
                <li><Link to='/about' href="#">About</Link></li>
                <li><Link to='/contact' href="#">Contact</Link></li>
            </ul>
        </nav>



        </div>
    )
}

export default Navigation
