import React,{useState,useEffect} from 'react'
import Navwithlogout from './Navwithlogout/Navwithlogout'
import Navigation from './Navigation'

function Mainnav() {
    const[userid,setUserid] =useState('')
    const getuserdata = async () => {
        const user= await localStorage.getItem("userid")
    
        setUserid(user)
    
      }
      useEffect(() => {
        getuserdata()
      }, [])
     console.log(userid)

    return (
        <div>
            { (userid) ? <Navwithlogout /> : <Navigation />}  
        </div>
    )
}

export default Mainnav
