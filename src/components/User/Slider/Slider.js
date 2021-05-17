import React from 'react'
import './slider.css'

function Slider() {
    return (
        <div>
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img className='imgss' src="https://i.postimg.cc/wTBDN2JW/1.jpg" alt="..." />
        <div class="carousel-caption">
          <h2 class="animated bounceInRight" >We Are Reliable</h2>
          <h3 class="animated bounceInLeft" >Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
      <div class="item">
        <img src="https://i.postimg.cc/GhHwf0Gv/2.jpg" alt="..." />
        <div class="carousel-caption">
          <h2 class="animated slideInDown" >We Deliver On Time</h2>
          <h3 class="animated slideInRight" >Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
      <div class="item">
        <img src="https://i.postimg.cc/ncsgk4fk/3.jpg" alt="..." />
        <div class="carousel-caption">
          <h2 class="animated zoomIn" >Best Customer Support</h2>
          <h3 class="animated zoomIn" >Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>

    </div>

   
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

        </div>
    )
}

export default Slider
