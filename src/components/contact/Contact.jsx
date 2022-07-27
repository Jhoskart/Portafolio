import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaTelegram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1sujwgt', 'template_z9j2kz5', form.current, 'gk7ExHWEQwIHRwDsX')
      .then(res => {
        Swal.fire({
          title: 'Exitoso',
          text: 'Tu mensaje ha sido enviado',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Hablemos un rato</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Jhoskartoro@gmail.com</h5>
            <a href="mailto:jhoskartoro@gmail.com">Enviame un correo</a>
          </article>
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>JhoskartDeveloper</h5>
            <a href="https://t.me/JhoskartDeveloper" target="_blank" >Enviame un mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Jhoskar Toro</h5>
            <a href="https://api.whatsapp.com/send?phone=56987047433&text=Estoy%20interesado%20%20en%20hablar%20contigo" target="_blank">Hablemos por WhatsApp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu Nombre Completo' required />
          <input type="email" name='email' placeholder='Tu Email' required />
          <textarea name="message" rows="7" placeholder='Tu Mensaje' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviame un mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
