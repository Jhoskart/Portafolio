import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import IMG from '../../assets/logo3.png'
import { useTranslation } from 'react-i18next'


const Footer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <footer>
      <img src={IMG} alt="logo" className='footer__logo' />

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">{t("footer.link1")}</a></li>
        <li><a href="#experience">{t("footer.link2")}</a></li>
        <li><a href="#portfolio">{t("footer.link3")}</a></li>
        <li><a href="#testimonials">{t("footer.link4")}</a></li>
        <li><a href="#contact">{t("footer.link5")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Jhooskar"> <FaFacebookF /> </a>
        <a href="https://www.instagram.com/jhoskart/"> <FiInstagram /> </a>
        <a href="https://twitter.com/Jhooskar"> <IoLogoTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>{t("footer.copy")}</small>
      </div>
    </footer>
  )
}

export default Footer
