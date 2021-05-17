import React from 'react'
import Feature from '../features.jsx'
import About from '../about'
import Services from '../services'
import Contact from '../contact'
import Header from '../header'
import Footer from '../Footer/Footer'
import Contents from './Contants/Contants.js'
/* import Card from './Card/Card.js' */
import Silder from '../Slider/Silder'
import About2 from '../About2'
import Card from '../Card-silder/MainCard'
import Counter from '../NumberCounter/Counter.js'
import Co from '../SecondContactus/Contactus'




function Home() {
    return (
        <div>
           <Silder />
            <About title='User' detail='' deails='' contant='User More' id='0' />
            <About2 title='Teacher' detail='' deails='' contant='User more' id='1'/>
            <About title='Services Provider' detail='' deails='' contant='User more' id='2' />
        <Card />
           <Counter />
<Co />
          <Footer />
            
        </div>
    )
}

export default Home
