import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import './navwithlogout.css'

function Navwithlogout() {
    const history = useHistory();

    const onlogout = () =>{
        localStorage.clear()
        history.push('/')
    }
    return (
        <div>
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
                <li><Link to='/Userprofile' href="#">Profile</Link></li>
                <li><Link /* to='/logout' */ href="#" onClick={onlogout}>Logout</Link></li>
            </ul>
        </nav>



        </div>
        </div>
    )
}

export default Navwithlogout
