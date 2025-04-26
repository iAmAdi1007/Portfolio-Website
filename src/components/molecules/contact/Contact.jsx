import React, { forwardRef, useState } from 'react'
import "./contact.css";
import { MdOutlineMail } from 'react-icons/md';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Notification from '../../atoms/Notification';

const Contact = forwardRef((_, ref) => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uhs2y5x', 'template_m24ndrb', form.current, 'Dk7qLIKmE6q6KptlV')
      .then((result) => {
        console.log(result.text);
        setShowNotification(true);
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id="contact" ref={ref}>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {showNotification &&
          <Notification
            title={'Success!'}
            message={'Email Sent Sucessfully!'}
            timeout={2}
            showNotification={showNotification}
            setShowNotification={setShowNotification}
          />
        }
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>pratapaditya516@gmail.com</h5>
            <a href="mailto:pratapaditya516@gmail.com" target='_blank' rel='noreferrer'>Send a mail</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Contact: +91 7044296080</h5>
            <a href="https://api.whatsapp.com/send?phone=7044296080" target='_blank' rel='noreferrer'>Ping on WhatsApp</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Aditya Pratap</h5>
            <a href="https://m.me/aditya.pratap.501" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
});

export default Contact