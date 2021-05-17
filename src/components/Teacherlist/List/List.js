import React,{useEffect, useState} from 'react'
import './list.css'
import axios from 'axios'
import {Modal,Button} from 'react-bootstrap'
import $ from 'jquery'
import {NotificationContainer, NotificationManager} from 'react-notifications';

function List() {
  const [data,setData] =useState([])
  const[request,setRequest] =useState({vendorId:'',fname:'',phone:'',time:'',date:''})
  const [userid,setUserid] =useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [disable,setDisable] =useState(true)

 /*  const getuserdata = async () => {
    const user= await localStorage.getItem("userid")
    setUserid(user)
  } */
  const user=  localStorage.getItem("userid")

  const Vendor = () => {
    axios.get("http://localhost:3001/vendor/vendorslist")
    .then((response) =>{
      console.log(response.data);
      setData(response.data.data)
      console.log(response.data.data)
    }).catch( ((error) => {
      console.log(error);
    }))

  }

  const vandorrequest = () => {
    const data ={
      token:user,
      vendorId :request.vendorId,
      time :request.time,
      Date:request.date
    }
    console.log(data)
    axios.post("http://localhost:3001/book",data)
    .then((response) =>{
      console.log(response.data);
      NotificationManager.success('Your Request has been sent its');
    }).catch( ((error) => {
      console.log(error);
      NotificationManager.error('please Check your infomation');
    }))
  }

  const SendRequest = (item) => {
    setShow(true)
    setRequest(item)

  }

 useEffect(() => {
  Vendor();
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    }, [])


    





    return (
    <>
     <div  className='container'>
        <div className='row'>
  { data.map( (item,index) => {
    return(
      <>
          <div key={index} className='col-6' style={{fontSize:'24px',border:'2px'}}>
{item.fname}
{item.vendorId}
          </div>
          <div className='col-6'>
<button type='submit' style={{fontSize:'18px'}} onClick={ () =>SendRequest(item)}>Send Request</button>
          </div>
       </>
      

    )
  }) }
   </div>
       </div>
       <div>
       <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label> Vandor Id</label>
              <input type="text" style={{fontSize:'16px'}}
                value={request.vendorId}
                disabled={disable}
                onChange={(e) => { setRequest({ ...request, vendorId: e.target.value })}} />
                 <br />
                <label> Fname</label>
              <input type="text" style={{fontSize:'16px'}}
                value={request.fname}
                disabled={disable}
                onChange={(e) => { setRequest({ ...request, fname: e.target.value }) }} /><br />
 <label> Date</label>
                <input type="date" style={{fontSize:'16px'}}
                onChange={(e) => { setRequest({ ...request, date: e.target.value }) }} /><br />
 <label> Time</label>
                <input type="time" style={{fontSize:'16px'}}
                onChange={(e) => { setRequest({ ...request, time: e.target.value }) }} /><br />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={vandorrequest}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    
        </>
    )
}

export default List
