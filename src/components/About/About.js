import React from 'react'

import './about.css'

function Abouts() {
    return (
        <div>
     
           <div className='ab'>
           <h2 style={{textAlign:"center",marginTop:'30px'}}>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="" alt="Jane" /* style="width:100%" */ />
      <div class="containers">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="buttons">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Mike" /* style="width:100%"  *//>
      <div class="containers">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="buttons">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="" alt="John" /* style="width:100%" */ />
      <div class="containers">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="buttons">Contact</button></p>
      </div>
    </div>
  </div>
</div>
           </div>
        </div>
    )
}

export default Abouts
