import React from 'react'
import About from './About'
import Header from '../header'
import Content from './AboutContent'
/* import Footer from '../contact' */
import Foter from '../Footer/Footer.js'
import Con from '../SecondContactus/Contactus'
import Slider from '../Slider/Silder'



function Mainabout() {
    return (
        <div>
          <Slider />
            <About />
            <About />
            <Content />
<Con />
            <Foter />
            
        </div>
    )
}

export default Mainabout
