import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const [t, i18n] = useTranslation("global")
  return (
   <section id="experience">
    <h5>{t("tecnologies.habs")}</h5>
    <h2>{t("tecnologies.tech")}</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>{t("tecnologies.front")}</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>HTML5</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>CSS3</h4>
              <small className="text-light">Intermedio</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Typescript</h4>
              <small className="text-light">Experimentado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>React</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Redux</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
        </div>
      </div> 

      {/* END OF FRONTEND */}

      <div className="experience__backend">
      <h3>{t("tecnologies.back")}</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>NodeJS</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Express</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>ASP.NET</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Entity Framework</h4>
              <small className="text-light">Experimentado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>SQL Server</h4>
              <small className="text-light">Basico</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>PosgreSQL</h4>
              <small className="text-light">Experimentado</small>
            </div>
          </article>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Experience
