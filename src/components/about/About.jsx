import React from 'react'
import './about.css'
import ME from '../../assets/lal.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useTranslation } from 'react-i18next'

const About = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <section id="about">
      <h5>{t("about.conoceme")}</h5>
      <h2>{t("about.acerca")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>{t("about.exp")}</h5>
              <small>{t("about.cuant")}</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>{t("about.idioma")}</h5>
              <small>{t("about.nivel")}</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>{t("about.pro")}</h5>
              <small>{t("about.cuantos")}</small>
            </article>
          </div>
          <div>
              <p className='parrafo'>
                {t("about.textolargo")}
              </p>
              <a href="#contact" className="btn btn-primary">{t("about.accion")}</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
