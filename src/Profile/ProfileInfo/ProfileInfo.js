import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './profile.css'

function ProfileInfo() {
    const[data,setData] =useState([])
    const onProfileInfo = () => {
        axios.get("http://localhost:3001/user/profile")
        .then((response) =>{
          console.log(response.data);
          setData(response.data.data)
          console.log(response.data.data)
        }).catch( ((error) => {
          console.log(error);
        }))
    
      }

    return (
        <div>
             <div class="containerp">
          <h1>Profile Detalis</h1>
            <form>
                <label>FirstName</label><br />
                <input type="text" /><br />
                <label>Last Name</label><br />
                <input type="text" /><br />
                <label>PhoneNumber</label><br />
                <input type="text" /><br />
                <label>Email Addres</label><br />
                <input type="text" /><br />
                <label>Addess</label><br />
                <input type="text" /><br />
                <button onClick={onProfileInfo} > update the Profile </button>
            </form>
        </div>
        </div>
    )
}

export default ProfileInfo
