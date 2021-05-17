import React, { useState } from 'react'
import './regis.css'
import axios from 'axios'
import { useHistory,Link } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Registration() {
  const [fname, setFname] = useState({value:'',error:'',valid:false})
  const [lname, setLname] = useState({value:'',error:'',valid:false })
  const [email, setEmail] = useState({value:'',error:'',valid:false })
  const [password, setPassword] = useState({value:'',error:'',valid:false })
  const [phone, setPhone] = useState({value:'',error:'',valid:false })
  const[address,setAddress] =useState({value:'',error:''})
  const [gender, setGender] = useState({value:'Male',error:'',valid:false })
  const [disable, setDisabled] = useState(false)
  const history = useHistory();

  const OnSubmited = (event) => {
    event.preventDefault();
    console.log(fname.value)
    console.log(lname.value)
    console.log(email.value)
    console.log(password.value)
    console.log(gender)
    console.log(phone.value)
    /* setDisabled(true) */
    const data = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      gender:gender.value,
      address:address.value,
      
    }

    console.log(data)
  /*   setDisabled(true) */
    console.log(fname,lname,phone,email,password)
   if(!fname.valid ||!lname.valid || !email.valid || !password.valid || !phone.valid)
   {

     alert('please fill the properly data')
   
   }else{
    axios.post('http://localhost:3001/vendor/vendorregister',data)
      .then((response) =>{
        console.log(response.data);
       /*  setDisabled(false) */
        NotificationManager.success('Successfully Registration User');
      history.push('/teacher/login')
      }).catch( ((error) => {
        console.log(error);
        /* setDisabled(false); */
        NotificationManager.error('Check Your Infomation and correct ');

      }))
  }}
/*############################################Validation############################################### */
const onblurfname = () => {
  if (fname.value == '') {
    setFname({...fname, error: 'Fill the firstname',valid:false  })
   
  }
  else {
    setFname({...fname, error: '',valid:true})
    
  }
}
const onblurlname = () => {
  if (lname.value == '') {
    setLname({...lname, error: 'Fill the lastname',valid:false  })
  
  }
  else {
    setLname({...lname, error: '',valid:true })
   

  }
}
const onblurphone = () => {
 const re= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
 /* const digits = p.replace(/\D/g, ""); */
  if (!re.test(phone.value)){
    setPhone({...phone, error: 'Fill the phonenumber',valid:false })
  }
  else {
    setPhone({...phone, error: '',valid:true })
   

  }
}
const onbluremail = () => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(email.value).toLowerCase()))
  setEmail({...email, error: "Email is not valid please Enter the Valid email",valid:false  });
  
else {setEmail({...email, error: "",valid:true  });


}
}
const onblurpassword = () => {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!re.test(password.value) ) {
    setPassword({ ...password, error: ' min 8 letter password, with at least a symbol, upper and lower case letters and a number',valid:false  })
    
  }
  else {
    setPassword({ ...password, error: '',valid:true  })
   

  }
}

/* const onblurselect = () => {
  if (select.value == '') {
    setSelect({ ...select, error: 'Fill the Select',valid:false  })
 
  }
  else {
    setSelect({ ...select, error: '',valid:true })
   

  }
} */
/*############################################End###################################################### */

  return (
    <div>
      <div className='f'>
        <h1 style={{color:"black"}}>Registration</h1>
        <form className='formregiu' onSubmit={OnSubmited}>
          <div class="rowr">
            <label for="Firstname" style={{color:"black"}}>Firstname</label>
            <input type="text" name="email" autocomplete="off" placeholder="First Name" 
            onChange={(event) => { setFname({...fname,value:event.target.value}) }} 
            onFocus={(event => { setFname({ ...fname, error: event.target.error }) })}
            onBlur={onblurfname} 
            />
                <span style={{ color: 'red' }} >{fname.error}</span>
          </div>
          <div class="rowr">
            <label for="Lastname" style={{color:"black"}}>Lastname</label>
            <input type="text" name="email" autocomplete="off" placeholder="Last Name" 
              onChange={(event) => { setLname({...lname,value:event.target.value}) }} 
              onFocus={(event => { setLname({ ...lname, error: event.target.error }) })}
              onBlur={onblurlname}  />
                  <span style={{ color: 'red' }} >{lname.error}</span>
          </div>
          <div class="rowr">
            <label for="phone" style={{color:"black"}}>phone</label>
            <input type="phone" name="phone" autocomplete="off" placeholder="Phone Number" 
             onChange={(event) => { setPhone({...phone,value:event.target.value}) }} 
             onFocus={(event => { setPhone({ ...phone, error: event.target.error }) })}
             onBlur={onblurphone}  />
                 <span style={{ color: 'red' }} >{phone.error}</span>
          </div>
          <div class="rowr">
            <label for="Address" style={{color:"black"}}>address</label>
            <input type="text" name="address" autocomplete="off" placeholder="Address" 
              onChange={(event) => { setAddress({...address,value:event.target.value}) }} 
              onFocus={(event => { setAddress({ ...address, error: event.target.error }) })}
             /*  onBlur={onblurlname} */  />
                 {/*  <span style={{ color: 'red' }} >{lname.error}</span> */}
          </div>
          <div class="rowr">
            <label for="email" style={{color:"black"}}>Email</label>
            <input type="email" name="email" autocomplete="off" placeholder="email@example.com"
               onChange={(event) => { setEmail({...email,value:event.target.value}) }} 
               onFocus={(event => { setEmail({ ...email, error: event.target.error }) })} 
               onBlur={onbluremail} />
                   <span style={{ color: 'red' }} >{email.error}</span>
          </div>
          <div class="rowr">
            <label for="password" style={{color:"black"}}>Password</label>
            <input type="password" name="password" 
             onChange={(event) => { setPassword({...password,value:event.target.value}) }} 
             onFocus={(event => { setPassword({ ...password, error: event.target.error }) })}
             onBlur={onblurpassword}  />
                 <span style={{ color: 'red' }} >{password.error}</span>
          </div>
          <div class="rowr">
            <label for="password" style={{color:"black"}}> Gender</label>
            <select name="cars" id="cars"
            value = {gender.value}
               onChange={(event) => { setGender({...gender,value:event.target.value}) }} 
               onFocus={(event => { setGender({...gender, error: event.target.error }) })}
               /* onBlur={onblurselect} */ >
                    {/*  <span style={{ color: 'red' }} >{select.error}</span> */}
              <option value="Blind">Male</option>
              <option value="Deaf">Female</option>
             {/*  <option value="Dumb">Dumb</option> */}
              
            </select>
          </div>
          <button className='bt' type="submit" disabled={disable}>
            {disable ? "Loading..." : "Register"}</button>
            <div className='signupmain'>
       <sapn>Already Register||</sapn>   <Link to='/teacher/login' className='signup' style={{color:'red'}} > Login</Link>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Registration
