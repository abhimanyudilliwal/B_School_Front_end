import React from 'react'
import Slider from '../Slider/Silder'
import Footer from '../Footer/Footer'
import CSlider from './Teacherslider/Teacherslider'
import SSlider from './ServiceProvider/ServiceProvider'
import Card from './Card/Card'
import Contact from '../SecondContactus/Contactus'



function Teacher() {
 
    return (
        <div>
            <Slider />
            <CSlider />
            <Card />
            <Contact />
            <Footer />
        
        </div>
    )
}

export default Teacher
