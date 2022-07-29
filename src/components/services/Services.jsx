import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'


const Services = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section id='services'>
      <h5>{t("services.ofre")}</h5>
      <h2>{t("services.serv")}</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.title")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv1")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv2")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv3")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv4")}
              </p>
            </li>
          </ul>
        </article>

        {/* END OF DISEÑO */}

        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.title2")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv5")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv6")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv7")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv8")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv9")}
              </p>
            </li>
          </ul>
        </article>

        {/* END OF DESARROLLO WEB */}

        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.title3")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv10")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv11")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv12")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv13")}
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                {t("services.serv14")}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
