import React from 'react'
import './contactus.css'

function Contactus() {
    return (
        <div>
            <section>

{/* <div class="listing-hero">
  <div class="hero-heading">
      <div class="hero-large">Contact Us.</div>
      <div class="hero-text"> <i>Got any Questions? Feel free to ask or visit our FAQ page </i> </div>       
    </div>
</div> */}

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
    )
}

export default Contactus
