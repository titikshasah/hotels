import React from "react";
import Navbar from "./Navbar";
function Contact(){
    return(
  <>
  <Navbar/>
  <div className="container text-center" style={{backgroundColor:"lightblue"}}>
      <form method="post">
   <div>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <button type="button" className="btn btn-success btn-lg">Send</button>
      </div>
    </form>
  </div>
</div>
</form>
      <br/><br/>
      <center><h1>Office Location</h1></center>
      <center>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304.3269650852799!2d88.3697316562074!3d22.766678271071353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89a509b84ecb1%3A0xf9d43016559828ee!2sMi%20Service%20Center%2C%20Ghosh%20Para%20Road%2C%20Lalkhuti%2024P%2C%20West%20Bengal%20(Infotel)!5e1!3m2!1shi!2sin!4v1654338664049!5m2!1shi!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </center>
      </div>
  </>
    );
}
export default Contact;