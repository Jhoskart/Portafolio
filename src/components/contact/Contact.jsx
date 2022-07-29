import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaTelegram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import { type } from '@testing-library/user-event/dist/type'


const Contact = () => {
  const [t, i18n] = useTranslation("global")

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
      <h5>{t("contact.hab")}</h5>
      <h2>{t("contact.contact")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Jhoskartoro@gmail.com</h5>
            <a href="mailto:jhoskartoro@gmail.com">{t("contact.msg1")}</a>
          </article>
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>JhoskartDeveloper</h5>
            <a href="https://t.me/JhoskartDeveloper" target="_blank" >{t("contact.msg2")}</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Jhoskar Toro</h5>
            <a href="https://api.whatsapp.com/send?phone=56987047433&text=Estoy%20interesado%20%20en%20hablar%20contigo" target="_blank">{t("contact.msg3")}</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t("contact.text1")} required />
          <input type="email" name='email' placeholder={t("contact.text2")} required />
          <textarea name="message" rows="7" placeholder={t("contact.text3")}required ></textarea>
          <button type='submit' className='btn btn-primary'>{t("contact.text4")}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
