import React from 'react'
import './slider.css'
import img1 from '../../asset/hello.jpg'

function Silder() {
    return (
        <div>
            <div class="containeras">
  <img src={img1} alt="Snow" style={{width:"100%"}}/>
  <div class="bottom-left">Bottom Left</div>
  {/* <div class="top-left">Top Left</div>
  <div class="top-right">Top Right</div> */}
  <div class="bottom-right">Bottom Right</div>
  <div class="centered">Centered</div>
</div>
        </div>
    )
}

export default Silder
