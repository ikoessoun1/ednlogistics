import React from 'react';


function Contact() {
  return (
    <div id='contact'>
      <h1> CONTACT US TODAY</h1>
      <form>
        <input id='contact form input' type='text' placeholder='Full Name' required/>
        <input type='email' placeholder='Type your E-mail' required/>
        <textarea placeholder='Write here......' name='message'></textarea>
        <input id='contact form textarea' type='submit' value='Send'/>
      </form>
      
    </div>
  )
}

export default Contact;
