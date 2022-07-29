import React from 'react'
import CV from '../../assets/cv.pdf'
import CVEN from '../../assets/cvEN.pdf'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const [t, i18n] = useTranslation("global")
  const idioma = localStorage.getItem("idioma")
  return (
    <div className='cta'>
      {idioma === "es" ? (
        <a href={CV} download className='btn'>{t("header.cv")}</a>
      ):(
        <a href={CVEN} download className='btn'>{t("header.cv")}</a>
      )}
        <a href="#contact" className='btn btn-primary'>{t("header.accion")}</a>
    </div>
  )
}

export default CTA
