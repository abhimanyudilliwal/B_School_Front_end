import React,{useState} from 'react'
import  './login.css'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Login() {
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [disable,setDisable] =useState(false)
  const history = useHistory();

  const onLogin = (event) =>{
    event.preventDefault();
   
    console.log(email)
    console.log(password)
  
    /* setDisabled(true) */
    const data = {
      email: email,
      password: password
    }
    console.log("UserData",data)
   /*  setDisable(true) */
    axios.post('http://localhost:3001/user/login',data)
      .then(function (response) {
      console.log(response.data.data)
      console.log(response.data.token)
      localStorage.setItem("userid",response.data.token);
      if(response.data.status){
      NotificationManager.success('Successfully Login User');
    }else{
      NotificationManager.error('User already Registration');
    }
      history.push('/')
      }).catch( ((error) => {
        console.log(error);
      /*   setDisable(false); */
        /* console.log(error.message) */
      NotificationManager.error("ERRor")
      }))
  }
    return (
        <>
        <div className='fo'>
        <h1 style={{color:'black'}}>Login</h1>
        <form onSubmit={onLogin} className='formj'>
          <div className="rowss">
            <label for="email" style={{color:'black'}}>Email</label>
            <input type="email" name="email"  autocomplete="off" placeholder="email@example.com" onChange={
               (event) => {setEmail(event.target.value)}
            } />
          </div>
          <div className="rowss">
            <label for="password" style={{color:'black'}}>Password</label>
            <input type="password" name="password" onChange={
               (event) => {setPassword(event.target.value)}} />
          </div>
          <button className='btnln' type="submit" disabled={disable}>{disable ? "Loading..." : "Login"}</button>
       <div className='signupmain'>
       <sapn>Create one ||</sapn>   <Link to='/registration' className='signup' style={{color:'red'}} > Sign Up</Link><br/>
        
       
         <Link to='/user/forget' className='signup' style={{color:'red'}} > Forget Password</Link>
           </div>
        </form>
       
       
        </div>
        </>
    )    
           
}

export default Login
