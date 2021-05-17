import React from 'react'
import Silder from '../Slider/Silder'
import Footer from '../Footer/Footer'
import Provider from './Services/Serviceprovider'

function Service() {
    return (
        <div>
            <Silder />
            <h1 style={{color:'black'}}> Our Services Provider</h1>
            <Provider  />
            <Footer />
          
        </div>
    )
}

export default Service
