import React from 'react'
import Card from './Card'

function Maincard() {
    return (
        <div>
           <div className='container'>
               <div className='row'>
                   <div className='col-4'>
                       <Card />
                   </div>
                   <div className='col-4'>
                       <Card />
                   </div>
                   <div className='col-4'>
                       <Card />
                   </div>
               </div>
           </div>
            
        </div>
    )
}

export default Maincard
