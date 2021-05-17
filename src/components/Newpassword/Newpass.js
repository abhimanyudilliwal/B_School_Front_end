import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useHistory,useParams } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Newpass() {
  
 

  let {id}   = useParams();
    const history = useHistory();
    const[password,setPassword] =useState('')
    const[confirmpassword,setConfirmPassword] =useState('')


    useEffect(() => {
  /*     token=match.params.id */
         console.log(id)
     }, [])

    const onreset = (event) =>{
        console.log(password)
        event.preventDefault();
       
      const data={
        token:id,
        new_password:password,
        confirm_password:confirmpassword
        }  
        console.log(data)
        if (password !== confirmpassword)
        {
          alert("password does not match")
        }else{
      
        axios.post('http://localhost:3001/user/set-password',data)
        .then(function (response) {
        console.log(response.data.data)
       /*  localStorage.setItem("userid",response.data.data.userId); */
        NotificationManager.success('Successfully Reset Password User');
        history.push('/login')
        }).catch( ((error) => {
          console.log(error);
        /*   setDisable(false); */
          console.log(error.message)
        NotificationManager.error("Server Internal Error")
        }))

            
    }}
    return (
       
        <div>
           <div className='fo'>
        <h1 style={{color:'black'}}>New Password</h1>
        <form onSubmit={onreset} className='formj'>
          <div className="rowss">
            <label for="new-password" style={{color:'black'}}>New Password</label>
            <input type="text" name="new password"  autocomplete="off" placeholder="email@example.com" 
            onChange={ (event) => {setPassword(event.target.value)}}  />
          </div>
          <div className="rowss">
            <label for="password" style={{color:'black'}}>Confirm Password</label>
            <input type="text" name="confirm password" 
             onChange={ (event) => {setConfirmPassword(event.target.value)}} 
            />
          </div>
        <button className='btnln' type="submit">Submit</button>
    
        </form>
       
       
        </div>
        </div>
    )
}

export default Newpass
