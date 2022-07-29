import React, { useEffect, useState} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/sinfondo.png'
import HeaderSocials from './HeaderSocials'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [t, i18n] = useTranslation("global")
  const [activeButton, setActiveButton] = useState(false)
  const idioma = localStorage.getItem('idioma')
  useEffect(() => {
    if (idioma === 'en') {
      i18n.changeLanguage('en')
      setActiveButton(true)
    } else {
      i18n.changeLanguage('es')
      setActiveButton(false)
    }
  })
  return (

    <header>
      <div className='margen'>
        <button onClick={() => {
          i18n.changeLanguage('es')
          setActiveButton(false)
          localStorage.setItem('idioma', "es");
          }} className={activeButton === false ? 'btnn btnn-primary' : 'btnn'}>ES</button>
        <button onClick={() => {
          i18n.changeLanguage('en')
          setActiveButton(true)
          localStorage.setItem('idioma', "en");
          }} className={activeButton === true ? 'btnn btnn-primary' : 'btnn'}>EN</button>  
      </div>
      <div className="container header_container">
        <h5>{t("header.saludo")}</h5>
          <h1>Jhoskar Toro</h1>
          <h5 className="text-light">
          {t("header.titulo")}
          </h5>
        <CTA />
        <HeaderSocials />
        
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>{t("header.bajar")}</a>
      </div>
    </header>
  )
}

export default Header
