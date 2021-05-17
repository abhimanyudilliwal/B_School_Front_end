import React from 'react'
import './about.css'
import { useHistory } from "react-router-dom";

const About = (props) => {
  const history = useHistory();
  const User = () => {
history.push('/user')
  }

  const Teacher = () => {
    history.push('/user')
      }

      const Service = () => {
        history.push('/user')
          }

     const onClickhandler = () =>{
       if(props.id === '0' )
       {
         history.push('/user')
       }else if (props.id==='1'){
        history.push('/teacher')
       }else{
         history.push('/services')
       }
     }     

  return (
    <div className='containerab' style={{marginBottom:'50px',marginTop:'40px'}}>
          <div className='row'>
            <div className='col-6' >
           <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
           </div>
           <div className='col-6' style={{textAlign:'center'}}>
          <h1 style={{color:'black'}}> {props.title}</h1>
          <p>
            Add the Text
          </p>
          <div>
                <button type="submit" className='btnabout' onClick={onClickhandler} >Read</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default About
