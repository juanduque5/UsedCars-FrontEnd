import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container-contact">
        <div className="items-contact">
          <div className="info-contact">
            <h3>Automobiles from Americas largest Auctions!</h3>
            <p>Fill out the form and our team will contact you.</p>
          </div>
        </div>
        <div className="items-contact">
          <div className="input-contact">
            <form action="/action_page.php">
              
              <input type="tex" id="fname" name="firstname" placeholder="Your name.." />

              <input type="tex" id="lname" name="lastname" placeholder="Email.." />

              <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "80px" }}></textarea>

              <input  type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
