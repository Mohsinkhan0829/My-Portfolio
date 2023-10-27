import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactUs = () => {

    const form = useRef();

    const [done , setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jfe52ql', 'template_dsahb0r', form.current, 'NoSUewWql5TFJJu-Z')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className='Contact-form' id='Contact'>

        <div className='Contact-left'>
        <span>Get in touch</span>
        <span>Contact Me</span>
        </div>

        <div className='Contact-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' required />
                <input type="email" name='user_email' className='user' placeholder='Email' required/>
                <textarea name="message" cols="30" rows="5" className='user' placeholder='Message' required></textarea>
                <input type="submit" value="send" className='button' />
                <span>{done && "Thanks for contacting me."}</span>
            </form>
        </div>
      
    </div>
  )
  };
export default ContactUs