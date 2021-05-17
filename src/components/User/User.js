import React from 'react'
import Users from './UserContents/UsercMain.js'
import Service from './Services/Services'
import Footer from '../Footer/Footer'
/* import Slider from '../User/Slider/Slider' */
import Header from '../header'
import Slider from '../Slider/Silder'

function User() {
    return (
        <div>
         
           <Slider />
            <Users />
            <Service />
            <Footer />

        </div>
    )
}

export default User
