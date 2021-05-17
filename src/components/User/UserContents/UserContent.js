import React,{useState,useEffect} from 'react'
import './userdata.css'
import {Link} from 'react-router-dom'

function UserContent(props) {
  const[userid,setUserid] =useState('')
  const getuserdata = async () => {
    const user= await localStorage.getItem("userid")

    setUserid(user)

  }

 useEffect(() => {
    getuserdata()
  }, [])
 
    return (
        <div>
      
    
    <div class="services-box">
      <span class="icon">
        <i class="fas fa-paint-brush"></i>
      </span>
      <h3 class="services-title">Subject</h3>
    { userid ? <Link to='/teacherlist' class="services-title">{props.title}</Link> : <Link to='/login' class="services-title">{props.title}</Link>}
    </div>
    
    {/* <div class="services-box">
      <span class="icon">
        <i class="fas fa-desktop"></i>
      </span>
      <h3 class="services-title">web design</h3>
    </div> */}
    
    {/* <div class="services-box">
      <span class="icon">
        <i class="fas fa-code"></i>
      </span>
      <h3 class="services-title">web development</h3>
    </div> */}
    
  {/*   <div class="services-box">
      <span class="icon">
        <i class="fas fa-server"></i>
      </span>
      <h3 class="services-title">hosting</h3>
    </div> */}
    
   {/*  <div class="services-box">
      <span class="icon">
        <i class="fab fa-searchengin"></i>
      </span>
      <h3 class="services-title">SEO optimization</h3>
    </div> */}
    
   {/*  <div class="services-box">
      <span class="icon">
        <i class="fas fa-mobile-alt"></i>
      </span>
      <h3 class="services-title">responsive design</h3>
    </div> */}
   {/*  <div class="services-box">
      <span class="icon">
        <i class="fas fa-mobile-alt"></i>
      </span>
      <h3 class="services-title">responsive design</h3>
    </div> */}
   {/*  <div class="services-box">
      <span class="icon">
        <i class="fas fa-mobile-alt"></i>
      </span>
      <h3 class="services-title">responsive design</h3>
    </div> */}
    
  </div>

    )
}

export default UserContent
