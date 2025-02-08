import React ,{useRef} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_dpguexq', 'template_qskopfk', form.current, {
        publicKey: '8QQ_y17IlH6z0UwSh',
      })
      .then(
        (result) => {
          alert('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          alert('Message not sent');
        }
      );

  };
  const ContactData = [
    {
      id:1,
      icon: <MdOutlineEmail />,
      title:"Email",
      info: "Redatech@gmail.com",
      link: "mailto:test@gmail.com",
    },
    {
      id:2,
      icon: <RiMessengerLine />,
      title: "Messenger",
      info: "RedaTech",
      link: "https://m.me/houdareda.99",
    },
    {
      id:3,
      icon: <BsWhatsapp />,
      title:"WhatsApp",
      info: "01011608722",
      link: "https://api.whatsapp.com/send?phone=01011608722",
    }
  ]
  return (
    <section className='contact' id='contact'>
      <div className="top_section">
        <h5>Get in touch</h5>
        <h2>Contact</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map((item) => (
            <article className="contact_option" key={item.id}>
              <div className="contact_option_icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
              <a href={item.link} target='_blank' rel='noreferrer'>Contact</a>
            </article>
          ))}
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" name='name' placeholder='Full Nane'/>
          <input type="email"  placeholder='Your Email' name='email'/>
          <textarea name="message" id="" cols="30" rows="12" placeholder='Enter Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}
