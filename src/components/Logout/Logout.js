import React from 'react'

function Logout() {
 const  onlogout = () =>{
        localStorage.clear()
    }
    return (
        <div>
            <button type='submit' className='logout' onClick={onlogout}></button>
        </div>
    )
}

export default Logout
