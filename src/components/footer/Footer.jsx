import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import IMG from '../../assets/logote.webp'

const Footer = () => {
  return (
    <footer>
      <img src={IMG} alt="logo" className='footer__logo' />

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Recomendaciones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Jhooskar"> <FaFacebookF /> </a>
        <a href="https://www.instagram.com/jhoskart/"> <FiInstagram /> </a>
        <a href="https://twitter.com/Jhooskar"> <IoLogoTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Desarrollado por JhoskarT, todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
