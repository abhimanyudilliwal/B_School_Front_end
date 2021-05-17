import React,{useState} from 'react'
import './forget.css'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Forget() {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [disable,setDisable] =useState(false)
    const history = useHistory();

    const onforgetpassword = (event) =>{
        event.preventDefault();
       
        console.log(email)
        /* setDisabled(true) */
        const data = {
          email: email,
        /*   password: password */
        }
        setDisable(true)
        axios.post('http://localhost:3001/user/reset-link',data)
          .then(function (response) {
          console.log(response.data.data)
         /*  localStorage.setItem("userid",response.data.data.userId); */
          NotificationManager.success('Send Mail Your Mail id please Check its');
          history.push('/')
          }).catch( ((error) => {
            console.log(error);
            setDisable(false);
            console.log(error.message)
          NotificationManager.error("error is back to back")
          }))
      }
    return (
        <div>
            <div className='fo'>
        <h1 style={{color:'black'}}>Forget Passeord</h1>
        <form  onSubmit={onforgetpassword}  className='formj'>
          <div className="rowss">
            <label for="email" style={{color:'black'}}>Email</label>
            <input type="email" name="email"  autocomplete="off" placeholder="email@example.com" onChange={
               (event) => {setEmail(event.target.value)}
            } />
          </div>
        {/*   <div className="rowss">
            <label for="password" style={{color:'black'}}>Password</label>
            <input type="password" name="password" onChange={
               (event) => {setPassword(event.target.value)}} />
          </div> */}
          <button className='btnln' type="submit" disabled={disable}>{disable ? "Loading..." : "Reset"}</button>
      {/*  <div className='signupmain'>
       <sapn>Create one ||</sapn>   <Link to='/registration' className='signup' style={{color:'red'}} > Sign Up</Link><br/>
        
       
         <Link to='/registration' className='signup' style={{color:'red'}} > Forget Password</Link>
           </div> */}
        </form>
       
       
        </div>
        </div>
    )
}

export default Forget
