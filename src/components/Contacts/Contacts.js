import React from 'react'
import Contac from '../SecondContactus/Contactus'
import './contacts.css'
import Footer from '../Footer/Footer'

function Contacts() {
  return (
    <>
    <div>
 <div>
            <section>

<div class="listing-hero">
  <div style={{textAlign:'center'}} >
      <h1 class="hero-large" style={{textAlign:'center'}}>Contact Us.</h1>
        
    </div>
</div>

<div class="containerc-contact">
  <div class="wrap-contact">

    <form name="contact" class="contact-form validate-form" method="post" action= "contact-form-handler.php">

      <div class="wrap-input validate-input" data-validate="Please enter your name">
        <input class="input" type="text" name="name" placeholder="Full Name" />
      </div>

      <div class="wrap-input validate-input" data-validate = "Please enter your email">
        <input class="input" type="text" name="email" placeholder="E-mail" />
      </div>

      <div class="wrap-input validate-input" data-validate = "Please enter your message">
        <textarea class="input" type="text" name="message" placeholder="Your Message" ></textarea>
      </div>

      <div class="container-contact-form-btn">
        <button type="submit" class="contact-form-btn">
          <span>Send</span>
        </button>
      </div>

     

    </form>

  </div>
</div>




</section>

        </div>
    </div>
   
   <Footer />
   </>
  )
}

export default Contacts
