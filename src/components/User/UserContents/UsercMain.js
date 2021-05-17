import React from 'react'
import './userdata.css'
import Content from './UserContent'

function UsercMain() {
    return (
        <div>
             <div class="containeru">
  <h2 class="section-title">services</h2>
  <div class="services-inner">
<Content title='Hindi' />
<Content title='math'/>
<Content title='Science'/>
<Content title='History'/>
<Content title='Music'/>
<Content title='dance'/>
<Content title='pop-up'/>
<Content title='Programming' />
      </div> 
        </div>
        </div>
    )
}

export default UsercMain
