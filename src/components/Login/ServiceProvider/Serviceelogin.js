 import React,{useState} from 'react'
import  './service.css'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';


const ServicesProvider = () => {
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [disable,setDisable] =useState(false)
  const history = useHistory();

  const onLogin = (event) =>{
    event.preventDefault();
   
    console.log(email)
    console.log(password)
  
  
    const data = {
      email: email,
      password: password
    }
    console.log("UserData",data)
    setDisable(true)
    axios.post('http://localhost:3001/provider/login',data)
      .then(function (response) {
      console.log(response.data.data)
      localStorage.setItem("Serviceproviderid",response.data.data.providers_id);
      NotificationManager.success('Successfully Login Service Provider');
      history.push('/')
      }).catch( ((error) => {
        console.log(error);
  
        console.log(error.message)
      NotificationManager.error("Your Password is Wrong")
      }))
  }
    return (
        <>
        <div className='fos'>
        <h1 style={{color:'black'}}>Service Provider Login</h1>
        <form onSubmit={onLogin} className='formjs'>
          <div className="rowsss">
            <label for="email" style={{color:'black'}}>Email</label>
            <input type="email" name="email"  autocomplete="off" placeholder="email@example.com" onChange={
               (event) => {setEmail(event.target.value)}
            } />
          </div>
          <div className="rowsss">
            <label for="password" style={{color:'black'}}>Password</label>
            <input type="password" name="password" onChange={
               (event) => {setPassword(event.target.value)}} />
          </div>
          <button className='btnlns' type="submit" disabled={disable}>{disable ? "Loading..." : "Login"}</button>
       <div className='signupmains'>
       <sapn>Create one ||</sapn>   <Link to='/service/registration' className='signup' style={{color:'red'}} > Sign Up</Link><br/>
        
       
         <Link to='/user/forget' className='signups' style={{color:'red'}} > Forget Password</Link>
           </div>
        </form>
       
       
        </div>
        </>
    )    
           
}

export default ServicesProvider;

 