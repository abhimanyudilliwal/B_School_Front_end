import React from 'react'
import './about2.css'
import { useHistory } from "react-router-dom";
function About2(props) {
    const history = useHistory();
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
        <div className='containera'>
          <div className='row'>
            <div className='col-6' style={{textAlign:'center'}}>
          <h1 style={{color:'black'}}>  {props.title}</h1>
          <p>
            Add the Text
          </p>
          <div>
                <button type="submit" className='btnabout2' onClick={onClickhandler} >Read</button>
              </div>
            </div>
            <div className='col-6' >
           <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
           </div>
          </div>
        </div>
    )
}

export default About2
