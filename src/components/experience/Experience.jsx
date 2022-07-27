import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id="experience">
    <h5>Habilidades</h5>
    <h2>Tecnologias</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Desarrollo Frontend</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>HTML</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>CSS</h4>
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
              <h4>Redux Toolkit</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Tailwind</h4>
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
        </div>
      </div> 

      {/* END OF FRONTEND */}

      <div className="experience__backend">
      <h3>Desarrollo Backend</h3>
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
              <h4>Sequelize</h4>
              <small className="text-light">Avanzado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">Experimentado</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>SQL</h4>
              <small className="text-light">Basico</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>JsonWebToken</h4>
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
